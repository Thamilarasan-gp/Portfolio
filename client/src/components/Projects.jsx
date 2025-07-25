import React, { useState } from "react";
import styles from "./Projects.module.css";
import project1Image from "../assets/aboutimg.jpg";
import project2Image from "../assets/Myprofile.png";
import project3Image from "../assets/Myprofile.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const projects = [
    {
      title: "Namma Spot",
      description:
        "A location-based web app that lets users discover, share, and rate nearby local spots like restaurants, hangouts, and landmarks. Integrated Google Maps API, real-time updates, and user-generated content. Built as part of a hackathon hosted by Better Tomorrow and recognized for design & functionality. Features a responsive UI and RESTful API integration for CRUD operations.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Maps API"],
      tags: ["#react", "#nodejs", "#googlemaps", "#expressjs", "#mongodb"],
      image: "https://img.freepik.com/premium-photo/smart-parking-system-with-sensors-guiding-drivers-available-parking-spaces_1327465-51174.jpg",
      githubLink: "https://github.com/Thamilarasan-gp/Nammaspot_frontend", // update with actual link
      liveDemo: "https://namma-spot.vercel.app/" // update with live URL
    },
    {
      title: "BusMate (Smart Bus Ticketing)",
      description:
        "A real-time digital ticketing system for public transport featuring QR payments, seat tracking, GPS-based live location, and smart alerts. Developed in a 24-hour hackathon, secured runner-up. Payment system powered by Razorpay. Socket.IO enabled real-time updates for seat availability and bus tracking. Optimized UI for mobile-first experience using React Native (Expo).",
      techStack: ["React Native", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Razorpay", "Google Maps API"],
      tags: ["#reactnative", "#socketio", "#razorpay", "#gps", "#mongo"],
      image: "https://img.freepik.com/premium-photo/explore-daily-routines-interactions-public-transit-bus-driver-navigating-city-routes_1112342-11594.jpg",
      githubLink: "https://github.com/majhus001/Busmate-2", // update with actual link
      liveDemo: "https://expo.dev/accounts/majid10/projects/admin/builds/your-admin-build-id" // update with live demo
    },
    {
      title: "BidBetter (Real-time Auction App)",
      description:
        "A MERN Stack-based real-time auction platform developed during internship at Better Tomorrow. Used Socket.IO for live bidding updates, Vercel for frontend deployment, Render for backend. Features include live auction boards, admin/user dashboards, and responsive layout. Showcased ability to handle full-stack delivery and live systems.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Vercel", "Render"],
      tags: ["#socketio", "#real-time", "#react", "#fullstack", "#mongodb"],
      image: "https://img.freepik.com/premium-photo/auction-fever-how-capture-excitement-tension-auction-with-photography_1057087-1739.jpg",
      githubLink: "https://github.com/Thamilarasan-gp/BidBetter_frontend", // update with actual link
      liveDemo: "https://bid-better-web.vercel.app" // update with actual link
    }
  ];

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h4 className={styles.sectionSubtitle}>MY WORK</h4>
          <h2 className={styles.sectionTitle}>Projects.</h2>
          <p className={styles.sectionDescription}>
            Following projects showcase my ability to build real-time, scalable, and user-centric applications. Each project reflects my strengths in full-stack development, problem solving, and working with modern technologies.
          </p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div className={styles.projectCard} key={index}>
              <div className={styles.projectImageContainer}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <div className={styles.imageOverlay}></div>

                <a
                  href={project.githubLink}
                  className={styles.staticGithubButton}
                  aria-label="GitHub repository"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub className={styles.githubIcon} />
                </a>

                <div className={styles.projectLinks}>
                  <a
                    href={project.githubLink}
                    className={styles.githubButton}
                    aria-label="GitHub repository"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className={styles.githubIcon} />
                    <span className={styles.tooltip}>View Code</span>
                  </a>

                  <a
                    href={project.liveDemo}
                    className={styles.demoButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className={styles.demoIcon} />
                    <span className={styles.tooltip}>Live Demo</span>
                  </a>
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>

                <div className={styles.techStack}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className={styles.techItem}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.descriptionWrapper}>
                  <p
                    className={`${styles.projectDescription} ${
                      expandedDescriptions[index] ? styles.expanded : ""
                    }`}
                  >
                    {expandedDescriptions[index]
                      ? project.description
                      : project.description.slice(0, 180) + "..."}
                  </p>
                  <button
                    className={styles.showMoreButton}
                    onClick={() => toggleDescription(index)}
                  >
                    {expandedDescriptions[index] ? "Read Less" : "Read More"}
                  </button>
                </div>

                <div className={styles.projectFooter}>
                  <div className={styles.tags}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.liveDemo}
                    className={styles.liveDemoButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className={styles.externalIcon} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
