import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'BusMate',
    tagline: 'Real-Time Bus Tracking App',
    description:
      'A mobile app for real-time bus tracking using GPS and WebSocket. Features include live route updates, AR navigation, and offline support via LoRa.',
    techStack: ['React Native', 'Node.js', 'MongoDB', 'WebSocket', 'LoRa'],
    role: 'Designed UI, built backend APIs, integrated LoRa for offline connectivity.',
    links: {
      github: 'https://github.com/yourusername/busmate',
      demo: 'https://busmate-demo.com',
    },
    image: '/images/busmate-screenshot.jpg', // Replace with actual image
  },
  {
    title: 'E-Commerce Platform',
    tagline: 'Scalable Online Store',
    description:
      'A full-stack e-commerce platform with user authentication, product catalog, and secure payment integration, deployed on AWS.',
    techStack: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],
    role: 'Developed frontend and backend, integrated Stripe for payments.',
    links: {
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://ecommerce-demo.com',
    },
    image: '/images/ecommerce-screenshot.jpg', // Replace with actual image
  },
  {
    title: 'Task Manager CLI',
    tagline: 'Productivity Tool',
    description:
      'A command-line tool for task management with features like task prioritization, reminders, and export to JSON.',
    techStack: ['Python', 'Click', 'SQLite'],
    role: 'Designed CLI interface, implemented database storage.',
    links: {
      github: 'https://github.com/yourusername/taskmanager',
      demo: '', // No live demo for CLI
    },
    image: '/images/taskmanager-screenshot.jpg', // Replace with actual image
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsContainer}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <h4 className={styles.projectTagline}>{project.tagline}</h4>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className={styles.techItem}>
                      {tech}
                    </span>
                  ))}
                </div>
                <p className={styles.projectRole}>
                  <strong>Role:</strong> {project.role}
                </p>
                <div className={styles.projectLinks}>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkButton}
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkButton}
                    >
                      Live Demo
                    </a>
                  )}
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