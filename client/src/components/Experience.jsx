import React from 'react';
import styles from './Experience.module.css';
import { FaBriefcase, FaRocket, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
const Experience = () => {
  const experienceData = [
    {
      type: 'experience',
      title: 'Full Stack Internship',
      company: 'Better Tomorrow',
      date: 'Jan 2025 – Mar 2025',
      location: 'Remote',
      description: [
        'Led development of "BidBetter", a real-time bidding web app using Socket.IO.',
        'Integrated live bid tracking, deployed frontend on Vercel & backend on Render.',
        'Managed full-stack MERN-based development and team coordination.'
      ],
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'REST API'],
      position: 'left'
    }
    
  ];

  const educationData = [
    {
      type: 'education',
      title: 'B.Tech (Information Technology)',
      institution: 'Sri Eshwar College of Engineering',
      date: '2023 – 2027',
      grade: '8.3 CGPA',
      description: 'Focused on software development, DSA, system design, and full-stack web/mobile technologies.',
      skills: [],
      position: 'right'
    },
    {
      type: 'education',
      title: 'HSC – Higher Secondary Certificate',
      institution: 'Sree Saravana Niketan MHSS',
      date: '2022 – 2023',
      grade: '88.6%',
      description: 'Excelled in Physics, Chemistry, Mathematics, and Biology.',
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

  const allItems = [...experienceData, ...educationData, ...projectData];

const getTypeIcon = (type) => {
  const iconStyle = { color: 'white' }; // White color style
  
  switch (type) {
    case 'experience':
      return <FaBriefcase style={iconStyle} />;
    case 'project':
      return <FaRocket style={iconStyle} />;
    case 'education':
      return <FaGraduationCap style={iconStyle} />;
    default:
      return <FaMapMarkerAlt style={iconStyle} />;
  }
};

  const getTypeColor = (type) => {
    switch (type) {
      case 'experience':
        return '#3a65c2ff';
      case 'project':
        return '#bd3e3eff';
      case 'education':
        return '#339657ff';
      default:
        return '#6b7280';
    }
  };

  return (
    <div className={styles.experience}>
      <div className={styles.header}>
        <h1 className={styles.title}>Experience & Education</h1>
        <p className={styles.subtitle}>My professional journey, projects, and academic background</p>
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
              
              {item.company && <p className={styles.company}>{item.company}</p>}
              {item.institution && <p className={styles.company}>{item.institution}</p>}
              
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
