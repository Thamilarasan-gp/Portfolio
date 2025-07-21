import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Chatbot.module.css';
import robotIcon from '../assets/bot.png'; // You'll need to add a robot icon image

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I’m Thamilarasan’s portfolio bot. I can tell you about his education, skills, and achievements. For example, he’s pursuing a B.Tech in DTT at Sri Eshwar College of Engineering with an 8.3 GPA. Ask me anything about his profile!' },
  ]);
  const [input, setInput] = useState('');
  const [awaitingUserInput, setAwaitingUserInput] = useState(false);
  const [pendingQuestion, setPendingQuestion] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Predefined resume data
  const resumeData = {
    education: 'B.Tech in DTT, Sri Eshwar College of Engineering, 8.3 GPA',
    skills: 'To be provided by Thamilarasan',
    achievements: 'To be provided by Thamilarasan',
    projects: 'To be provided by Thamilarasan',
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message to chat
    setMessages([...messages, { sender: 'user', text: input }]);

    // Process user input
    let response = '';
    const lowerInput = input.toLowerCase();

    if (awaitingUserInput) {
      response = `Thank you for the details! Here's what I now know about your ${pendingQuestion}: ${input}. Anything else to add or another question for me?`;
      resumeData[pendingQuestion] = input;
      setAwaitingUserInput(false);
      setPendingQuestion('');
    } else {
      if (lowerInput.includes('education') || lowerInput.includes('college') || lowerInput.includes('gpa')) {
        response = `Thamilarasan is pursuing a ${resumeData.education}. Want to know more about his skills or achievements?`;
      } else if (lowerInput.includes('skills')) {
        if (resumeData.skills === 'To be provided by Thamilarasan') {
          response = `I don't have full details on Thamilarasan's skills yet. Could he provide more information about his skills?`;
          setAwaitingUserInput(true);
          setPendingQuestion('skills');
        } else {
          response = `Thamilarasan's skills include: ${resumeData.skills}. Anything else you'd like to know?`;
        }
      } else if (lowerInput.includes('achievements') || lowerInput.includes('accomplishments')) {
        if (resumeData.achievements === 'To be provided by Thamilarasan') {
          response = `I don't have full details on Thamilarasan's achievements yet. Could he provide more information about his achievements?`;
          setAwaitingUserInput(true);
          setPendingQuestion('achievements');
        } else {
          response = `Thamilarasan's achievements include: ${resumeData.achievements}. Anything else you'd like to know?`;
        }
      } else if (lowerInput.includes('projects')) {
        if (resumeData.projects === 'To be provided by Thamilarasan') {
          response = `I don't have full details on Thamilarasan's projects yet. Could he provide more information about his projects?`;
          setAwaitingUserInput(true);
          setPendingQuestion('projects');
        } else {
          response = `Thamilarasan's projects include: ${resumeData.projects}. Anything else you'd like to know?`;
        }
      } else {
        response = `I'm not sure about that. Could you ask about Thamilarasan's education, skills, achievements, or projects? Or, I can ask him for more details if needed!`;
      }
    }

    setMessages((prev) => [...prev, { sender: 'bot', text: response }]);
    setInput('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className={styles.chatWindow}
        >
          <div className={styles.chatHeader}>
            Thamilarasan's Portfolio Chatbot
          </div>
          <div className={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={msg.sender === 'user' ? styles.userMessage : styles.botMessage}
              >
                {msg.text}
              </motion.div>
            ))}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className={styles.inputField}
              placeholder={awaitingUserInput ? 'Please provide details...' : 'Ask about Thamilarasan...'}
            />
            <button onClick={handleSendMessage} className={styles.sendButton}>
              Send
            </button>
          </div>
        </motion.div>
      )}
      <div className={styles.robotIcon} onClick={toggleChat}>
        <img src={robotIcon} alt="Chatbot" />
      </div>
    </div>
  );
};

export default Chatbot;