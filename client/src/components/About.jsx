import React from 'react';
import styles from './About.module.css';

// Sample tech stack icons (replace with actual images or use a library like react-icons)
const techStack = [
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
];

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContainer}>
        {/* Text Content */}
        <div className={styles.textContent}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.bio}>
            I'm a passionate Software Development Engineer with a B.Tech in
            Computer Science from [Your University]. I specialize in building
            scalable web and mobile applications using modern technologies like
            React, Node.js, and MongoDB. My approach to coding emphasizes clean,
            maintainable code and user-centric design.
          </p>
          <p className={styles.bio}>
            With experience in full-stack development and a knack for
            problem-solving, I've worked on projects like real-time tracking apps
            and optimized backend systems. When I'm not coding, you can find me
            competing in hackathons, playing chess, or exploring new tech trends.
          </p>
        </div>

        {/* Tech Stack */}
        <div className={styles.techContent}>
          <h3 className={styles.subtitle}>My Tech Stack</h3>
          <div className={styles.techGrid}>
            {techStack.map((tech) => (
              <div key={tech.name} className={styles.techItem}>
                <img
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  className={styles.techIcon}
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;