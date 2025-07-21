import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 150) { // When scrolled 150px down
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Background Text */}
      <h1 className={styles.backgroundText}>THAMIL ARASAN</h1>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        {/* Floating Shapes */}
        <img
          src="https://leetcode.com/static/images/LeetCode_logo.png"
          className={`${styles.shape} ${styles.shape1}`}
          alt="LeetCode"
        />
        <img
          src="https://pngimg.com/uploads/github/github_PNG40.png"
          className={`${styles.shape} ${styles.shape2}`}
          alt="GitHub"
        />
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.C9w8BWXIehPGPc1dj-989wHaGq?rs=1&pid=ImgDetMain"
          className={`${styles.shape} ${styles.shape3}`}
          alt="Webflow"
        />
        <img
          src="https://logodownload.org/wp-content/uploads/2022/12/figma-logo-0-1536x1536.png"
          className={`${styles.shape} ${styles.shape4}`}
          alt="Figma"
        />
        <img
          src="https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png"
          className={`${styles.shape} ${styles.shape6}`}
          alt="MongoDB"
        />

        {/* Hero Content */}
        <div className={styles.heroContent}>
          <img
            src="https://avatars.githubusercontent.com/u/151711988?v=4"
            className={`${styles.profileImage} ${isScrolled ? styles.scrolled : ''}`}
            alt="Thamil Arasan"
          />
          <h2>
            Hi, I'm <span className={styles.highlight}>Thamil</span>
          </h2>
          <p>Full Stack Developer</p>
          <p className={styles.clients}>Passionate about Technology & Problem Solving</p>
          <button className={styles.ctaButton}>Let's Work Together!</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;