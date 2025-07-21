import React, { useState } from "react";
import styles from "./Projects.module.css";
import project1Image from "../assets/aboutimg.jpg";
import project2Image from "../assets/Myprofile.png";
import project3Image from "../assets/Myprofile.png";
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";

const Projects = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [expandedTech, setExpandedTech] = useState({});

  const projects = [
    {
      title: "Resource Hub",
      description: "Full-stack web app to store and display 100+ question papers for school students and government exams, featuring real-time updates and a centralized repository for better accessibility. The platform includes advanced search functionality, user authentication, and admin dashboard for content management. Built with modern web technologies to ensure scalability and performance.",
      techStack: ["React", "Node.js", "Express", "Redis"],
      tags: ["#react", "#nodejs", "#expressjs", "#mongodb"],
      image: project1Image,
      githubLink: "#",
      liveDemo: "#"
    },
    {
      title: "QuickBite",
      description: "A real-time food ordering system that enhances user convenience, reduces order processing time by 20%, and improves accuracy through real-time status updates and efficient API usage. The system includes restaurant management portal, delivery tracking, and payment integration. Optimized for mobile devices with PWA capabilities.",
      techStack: ["React", "Node.js", "Express", "Stripe API"],
      tags: ["#react", "#nodejs", "#expressjs", "#sql"],
      image: project2Image,
      githubLink: "#",
      liveDemo: "#"
    },
    {
      title: "Explore Tracker",
      description: "A financial tracking system that improves budgeting accuracy and provides real-time spending insights, reducing budget tracking errors by 30% and enhancing forecasting accuracy by 40%. Features include multi-account support, automated categorization, and detailed analytics dashboard with customizable reports.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      tags: ["#react", "#nodejs", "#expressjs", "#mongodb"],
      image: project3Image,
      githubLink: "#",
      liveDemo: "#"
    }
  ];

  const toggleDescription = (index) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleTech = (index) => {
    setExpandedTech(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h4 className={styles.sectionSubtitle}>MY WORK</h4>
          <h2 className={styles.sectionTitle}>Projects.</h2>
          <p className={styles.sectionDescription}>
            Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
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
                
                {/* Static GitHub icon in top-right corner */}
                <a 
                  href={project.githubLink} 
                  className={styles.staticGithubButton}
                  aria-label="GitHub repository"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FiGithub className={styles.githubIcon} />
                </a>
                
                {/* Hover links (both GitHub and Live Demo) */}
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
                
                <div className={`${styles.techStack} ${expandedTech[index] ? styles.expanded : ''}`}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className={styles.techItem}>{tech}</span>
                  ))}
                  {project.techStack.length > 3 && (
                    <button 
                      className={styles.showMoreTech} 
                      onClick={() => toggleTech(index)}
                    >
                    
                    </button>
                  )}
                </div>
                
                <div className={styles.descriptionWrapper}>
                  <p className={`${styles.projectDescription} ${expandedDescriptions[index] ? styles.expanded : ''}`}>
                    {project.description}
                  </p>
                  {project.description.length > 200 && (
                    <button 
                      className={styles.showMoreButton} 
                      onClick={() => toggleDescription(index)}
                    >
                      {expandedDescriptions[index] ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </div>
                
                <div className={styles.projectFooter}>
                  <div className={styles.tags}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
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