import React from 'react';
import styles from './Achievements2.module.css';

const Achievements2= () => {
  const achievementsData = [
    {
      title: '450+ problems solved on LeetCode with consistent participation in contests.',
      platform: 'LeetCode',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
      stats: '450+'
    },
    {
      title: 'Ranked 2000th globally among 500K+ users with 1500+ problems solved.',
      platform: 'CodeChef',
      image: 'https://cdn.iconscout.com/icon/free/png-256/free-codechef-3629285-3032359.png',
      stats: 'Top 0.4%'
    },
    {
      title: 'Completed advanced DSA and Java programming courses with certifications.',
      platform: 'Udemy',
      image: 'https://logoeps.com/wp-content/uploads/2013/03/udemy-vector-logo.png',
      stats: '2 Courses'
    },
    {
      title: 'Gained professional software development experience through internship.',
      platform: 'Cognizant',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Cognizant_logo_2022.svg',
      stats: '1 Week'
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