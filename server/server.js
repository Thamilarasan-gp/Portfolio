require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 5000;

// Rate limiter to prevent abuse
const chatLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // Max 10 requests per minute
  message: "Too many requests, please try again later.",
});

app.use(cors());
app.use(express.json());

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// In-memory chat history
const userSessionMap = new Map();

// Your portfolio details from resume, including social links
const portfolioDetails = `
Portfolio Information:
Name: Thamilarasan GP
Profession: B.Tech IT Student (2023-2027) at Sri Eshwar College of Engineering, 8.3 CGPA
Contact: thamilarasan.gp2023it@sece.ac.in, +91-9566699153
Social Profiles:
- LinkedIn: https://www.linkedin.com/in/thamilarasangp
- GitHub: https://github.com/Thamilarasan-gp
- LeetCode: https://leetcode.com/u/thamilarasangp/
- CodeChef: https://www.codechef.com/users/thamilarasangp
- GeeksforGeeks: https://www.geeksforgeeks.org/user/thamilarasa73f7/
- SkillRack: https://www.skillrack.com/faces/resume.xhtml?id=484668&key=262cac8aa817e03417f620f487c0e526d5a868cf
Education:
- B.Tech in Information Technology, Sri Eshwar College of Engineering (2023-2027), 8.3 CGPA
- HSC, Sree Saravana Niketan Matric Higher Secondary School (2022-2023), 88.6%
- SSLC, Sree Saravana Niketan Matric Higher Secondary School (2020-2021), Pass
Skills:
- Programming Languages: C++, C, JavaScript, Java
- Core Concepts: Object-Oriented Programming (OOP) in C++ & Java, Data Structures & Algorithms (DSA)
- Web Development: MERN Stack (MongoDB, Mongoose, Express.js, React.js, Node.js), Bootstrap
- Mobile Development: React Native (Expo)
- Database Management: SQL, MongoDB
- Development Tools: Docker, Postman, GitHub, VS Code
- UI/UX & Design: Figma, Canva
- Problem Solving: Solved 200+ problems on LeetCode (Contest Rating: 1,449), 450+ problems on SkillRack
Projects:
- Smart Parking and Saver System (June 2024): Led a team to develop a MERN Stack application with Leaflet for real-time parking tracking and Razorpay for payments, winning 2nd place and ₹5,000 among 15 teams.
- Smart Bus Ticketing & Tracking System (Feb 2025): Led development of a real-time digital ticketing system using React Native, MERN Stack, REST API, Razorpay, Socket.IO, and Google Maps API for live seat tracking, QR payments, GPS, and automated alerts.
- BidBetter (Jan 2025 – Mar 2025): Built a real-time bidding web app during a MERN stack internship at Better Tomorrow, using Socket.IO for live bid tracking, deployed on Vercel (frontend) and Render.com (backend).
Achievements:
- 2nd Place, 24-Hour Hackathon (March 2024): Secured 2nd among 100+ teams, earning ₹2,000 and an internship at Ai Futurix for a 24-hour app development.
- 2nd Place, Kriya 2K24 Tech Fest, PSG Tech (Feb 2025): Won ₹2,000 for standout project performance.
- 2nd Place, Kanam Event 2025 Project Expo, Dr. NGP Institute of Technology: Recognized for innovative project implementation.
- Runner Up, Freshathon, Sri Eshwar College of Engineering: Demonstrated strong project execution.
- Runner Up, KPR Institute of Engineering & Technology 24-Hour Hackathon: Excelled in rapid development.
- Runner Up, PSG College of Technology (Web Development): Showcased expertise in web technologies.
Certifications:
- C++/C Data Structures & Algorithms (Udemy)
- Java Programming (Internshala)
- Frontend Development: HTML, CSS & JavaScript (Udemy)
- Python for Data Science (Udemy)
- Problem Solving Basics (HackerRank)
- Full Stack Development: React.js, Node.js, Express.js, MongoDB (Udemy)
- SQL Basics & Intermediate (HackerRank)
`;

// Chat endpoint
app.post("/chat", chatLimiter, async (req, res) => {
  const { message, userId } = req.body;

  try {
    // Get or initialize user session
    let session = userSessionMap.get(userId) || { messages: [] };

    // Check if the user is asking about the AI's developer
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("who developed") || lowerMessage.includes("who created") || lowerMessage.includes("who made")) {
      const botResponse = "I am Kitti 😺, developed by Thamilarasan GP 😊";
      session.messages.push(
        { role: "user", parts: [{ text: message }] },
        { role: "model", parts: [{ text: botResponse }] }
      );
      userSessionMap.set(userId, session);
      return res.json({ response: botResponse });
    }

    // System prompt with portfolio details
    const systemPrompt = `
You are Kitti 😺, a professional chatbot for Thamilarasan GP's portfolio, designed to impress potential employers by showcasing his skills, projects, and achievements. Respond conversationally in the same language as the user's message (detect Tamil or English). Keep answers short (1-2 lines) unless a detailed response is necessary (e.g., for projects, skills, or achievements). Use the following portfolio information to craft compelling responses:
${portfolioDetails}
Instructions:
- If the user asks about Thamilarasan's accounts, profiles, or social links (e.g., "What are his accounts?", "Where can I find his profiles?", "Show me his GitHub"), respond with: "You can connect with Thamilarasan on: LinkedIn (https://www.linkedin.com/in/thamilarasangp), GitHub (https://github.com/Thamilarasan-gp), LeetCode (https://leetcode.com/u/thamilarasangp/), CodeChef (https://www.codechef.com/users/thamilarasangp), GeeksforGeeks (https://www.geeksforgeeks.org/user/thamilarasa73f7/), SkillRack (https://www.skillrack.com/faces/resume.xhtml?id=484668&key=262cac8aa817e03417f620f487c0e526d5a868cf)."
- For queries about skills, projects, education, or achievements, provide enthusiastic responses that highlight his expertise and awards (e.g., "Thamilarasan led a MERN Stack Smart Parking System, winning 2nd place!"). Use details only when needed.
- Highlight his problem-solving skills (200+ LeetCode, 450+ SkillRack) and certifications briefly to show commitment.
- For general or unrelated questions, give a polite, short response and redirect to his portfolio (e.g., "Interesting question! Want to know about Thamilarasan's projects?").
- Use a professional yet approachable tone with the name Kitti 😺.
User message:
${message}`;

    // Add system prompt as the first message if session is new
    if (!session.messages.length) {
      session.messages = [{ role: "user", parts: [{ text: systemPrompt }] }];
    } else {
      session.messages.push({ role: "user", parts: [{ text: message }] });
    }

    // Generate response using Gemini
    const result = await model.generateContent({ contents: session.messages });
    const botResponse = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, Kitti 😺 couldn't process that. Try asking about Thamilarasan's portfolio!";

    // Update session with bot response
    session.messages.push({ role: "model", parts: [{ text: botResponse }] });
    userSessionMap.set(userId, session);

    // Send response to client
    res.json({ response: botResponse });

  } catch (err) {
    console.error("Chat Error:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));