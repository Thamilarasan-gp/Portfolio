import React from 'react';
import styles from './Skills.module.css';

// Sample skills data (replace with your skills)
const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'JavaScript', icon: '/icons/javascript.svg' },
      { name: 'Python', icon: '/icons/python.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'React Native', icon: '/icons/react.svg' },
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', icon: '/icons/mongodb.svg' },
      { name: 'MySQL', icon: '/icons/mysql.svg' },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'AWS', icon: '/icons/aws.svg' },
    ],
  },
  {
    category: 'Concepts',
    items: [
      { name: 'Data Structures', icon: null },
      { name: 'Algorithms', icon: null },
      { name: 'REST APIs', icon: null },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Problem-Solving', icon: null },
      { name: 'Team Collaboration', icon: null },
      { name: 'Agile Methodology', icon: null },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skillsContainer}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((category, index) => (
            <div key={index} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <ul className={styles.skillList}>
                {category.items.map((skill, idx) => (
                  <li key={idx} className={styles.skillItem}>
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className={styles.skillIcon}
                      />
                    )}
                    <span>{skill.name}</span>
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

export default Skills;