import React from 'react';
import styles from './Achievements2.module.css';

const Achievements2= () => {
  const achievementsData = [
  {
    title: 'Solved 200+ LeetCode problems & consistently ranked in contests.',
    platform: 'LeetCode',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
    stats: '200+'
  },
  {
    title: 'Secured Runner-Up at KPR Engineering College Hackathon.',
    platform: 'Hackathon',
    image: 'https://cdn.iconscout.com/icon/free/png-256/free-codechef-3629285-3032359.png',
    stats: 'Top 2'
  },
  {
    title: 'Earned certifications in Advanced Java from Internshala.',
    platform: 'Internshala',
    image: 'https://logoeps.com/wp-content/uploads/2013/03/udemy-vector-logo.png',
    stats: '96%'
  },
  {
    title: 'Mastered DSA in C through hands-on Udemy projects.',
    platform: 'Udemy',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Cognizant_logo_2022.svg',
    stats: '4 Week'
  }
];


  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Key Achievements</h2>
      <div className={styles.grid}>
        {achievementsData.map((achievement, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.platformWrapper}>
                  <div className={styles.imageContainer}>
                    <img 
                      src={achievement.image} 
                      alt={achievement.platform}
                      className={styles.platformImage}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className={styles.fallbackIcon} style={{ display: 'none' }}>
                      {achievement.platform.charAt(0)}
                    </div>
                  </div>
                  <h3 className={styles.platform}>{achievement.platform}</h3>
                </div>
                <div className={styles.stats}>{achievement.stats}</div>
              </div>
              <p className={styles.cardDescription}>{achievement.title}</p>
              <div className={styles.glow}></div>
            </div>
            <div className={styles.highlightBar}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements2;