import React from 'react';
import styles from './SkillsBlock.module.css';

const SkillsBlock = () => {
  const services = [
    {
      id: 1,
      title: 'Parcel Register',
      description: 'lorem dolor sit amet, consectetur adipiscing elit.',
      icon: '📋',
      iconBg: '#A8C7FF',
      learnMore: 'Learn More'
    },
    {
      id: 2,
      title: 'Parcel Loading',
      description: 'lorem dolor sit amet, consectetur adipiscing elit.',
      icon: '📦',
      iconBg: '#FFB3BA',
      learnMore: 'Learn More'
    },
    {
      id: 3,
      title: 'Parcel In-transit',
      description: 'lorem dolor sit amet, consectetur adipiscing elit.',
      icon: '🚛',
      iconBg: '#FFDFBA',
      learnMore: 'Learn More'
    },
    {
      id: 4,
      title: 'Parcel Delivery',
      description: 'lorem dolor sit amet, consectetur adipiscing elit.',
      icon: '✅',
      iconBg: '#BAFFC9',
      learnMore: 'Learn More'
    }
  ];

  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={service.id} className={styles.serviceCard}>
            <div 
              className={styles.iconContainer}
              style={{ backgroundColor: service.iconBg }}
            >
              <span className={styles.icon}>{service.icon}</span>
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <a href="#" className={styles.learnMore}>
              {service.learnMore} <span className={styles.arrow}>→</span>
            </a>
            
            {/* Connecting Lines */}
            {index === 0 && <div className={styles.lineHorizontal}></div>}
            {index === 1 && <div className={styles.lineVertical}></div>}
            {index === 2 && <div className={styles.lineHorizontalBottom}></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsBlock;