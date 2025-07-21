import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const experienceData = [
    {
      type: 'experience',
      title: 'MERN Stack Internship',
      company: 'Better Tomorrow',
      date: 'Jan 2024',
      location: 'Remote',
      description: [
        'Completed a full-stack MERN project titled BookHive, a dynamic online platform for managing and exploring books.',
        'Implemented features such as user authentication, book listings, reviews, and responsive UI to enhance user interaction and accessibility.'
      ],
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
      position: 'left'
    }
  ];

  const educationData = [
    {
      type: 'education',
      title: 'B.Tech (Information Technology)',
      institution: 'University',
      date: '2023-2027',
      grade: '8.30 CGPA',
      description: 'Currently pursuing Bachelor of Technology in Information Technology with focus on software development, data structures, algorithms, and modern web technologies.',
      skills: [],
      position: 'right'
    },
    {
      type: 'education',
      title: 'HSC (Higher Secondary Certificate)',
      institution: 'School',
      date: '2022-2023',
      grade: '88.3%',
      description: 'Completed higher secondary education with distinction in Mathematics, Physics, Chemistry, and Biology',
      skills: [],
      position: 'right'
    }
  ];

  const projectData = [
    {
      type: 'project',
      title: 'Namma Spot Team Lead',
      company: 'Better Tomorrow',
      date: 'Jan 2024',
      location: 'Remote',
      description: [
        'Led a team in developing a location-based platform for discovering and sharing local spots.',
        'Implemented real-time features, user-generated content, and responsive design for optimal user experience.'
      ],
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Team Leadership'],
      position: 'left'
    }
  ];

  // Combine in the order: Experience → Education → Projects
  const allItems = [...experienceData, ...educationData, ...projectData];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'experience':
        return '💼';
      case 'project':
        return '🚀';
      case 'education':
        return '🎓';
      default:
        return '📍';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'experience':
        return '#2563eb';
      case 'project':
        return '#dc2626';
      case 'education':
        return '#16a34a';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className={styles.experience}>
      <div className={styles.header}>
        <h1 className={styles.title}>Experience & Education</h1>
        <p className={styles.subtitle}>My professional journey and academic background</p>
      </div>

      <div className={styles.timelineContainer}>
        <div className={styles.timelineLine}></div>
        
        {allItems.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.timelineItem} ${item.position === 'right' ? styles.timelineItemRight : styles.timelineItemLeft}`}
          >
            <div 
              className={styles.timelineCircle} 
              style={{ backgroundColor: getTypeColor(item.type) }}
            >
              <span className={styles.timelineIcon}>{getTypeIcon(item.type)}</span>
            </div>
            
            <div className={styles.timelineCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <span 
                  className={styles.itemType} 
                  style={{ backgroundColor: getTypeColor(item.type) }}
                >
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </span>
              </div>
              
              {item.company && (
                <p className={styles.company}>{item.company}</p>
              )}
              
              {item.institution && (
                <p className={styles.company}>{item.institution}</p>
              )}
              
              <div className={styles.details}>
                <span className={styles.date}>{item.date}</span>
                {item.location && <span className={styles.location}>{item.location}</span>}
                {item.grade && <span className={styles.grade}>{item.grade}</span>}
              </div>
              
              <div className={styles.description}>
                {Array.isArray(item.description) ? (
                  <ul>
                    {item.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.description}</p>
                )}
              </div>
              
              {item.skills && item.skills.length > 0 && (
                <div className={styles.skills}>
                  {item.skills.map((skill, idx) => (
                    <span key={idx} className={styles.skill}>{skill}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;