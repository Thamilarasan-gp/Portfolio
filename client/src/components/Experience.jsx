import React from 'react';
import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'XYZ Corp',
    duration: 'Jun 2024 - Aug 2024',
    responsibilities: [
      'Developed RESTful APIs using Node.js and Express, reducing data retrieval time by 20%.',
      'Implemented responsive UI components with React, improving user engagement by 15%.',
      'Optimized MongoDB queries, enhancing backend performance for a real-time tracking app.',
      'Collaborated in Agile sprints, integrating CI/CD pipelines with GitHub Actions.',
    ],
  },
  {
    role: 'Freelance Developer',
    company: 'Self-Employed',
    duration: 'Jan 2024 - May 2024',
    responsibilities: [
      'Built a full-stack e-commerce platform using React, Node.js, and MongoDB for a local business.',
      'Designed and deployed a scalable backend with AWS, handling 1,000+ daily users.',
      'Integrated payment gateways, ensuring secure transactions with 99.9% uptime.',
    ],
  },
  {
    role: 'Hackathon Lead Developer',
    company: 'ABC University Hackathon',
    duration: 'Mar 2024',
    responsibilities: [
      'Led a team to develop BusMate, a real-time bus tracking app using React Native and LoRa.',
      'Implemented WebSocket for live updates, achieving sub-second latency.',
      'Won 1st place for innovative use of offline connectivity in a 24-hour hackathon.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.experienceContainer}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceCard}>
              <h3 className={styles.role}>{exp.role}</h3>
              <h4 className={styles.company}>{exp.company}</h4>
              <p className={styles.duration}>{exp.duration}</p>
              <ul className={styles.responsibilities}>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className={styles.responsibility}>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;