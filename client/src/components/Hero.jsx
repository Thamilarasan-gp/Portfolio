import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* Text Content */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Your Name</span>
          </h1>
          <h2 className={styles.subtitle}>Software Development Engineer</h2>
          <p className={styles.tagline}>
            Passionate about building scalable web and mobile applications with
            React, Node.js, and MongoDB.
          </p>
          <a href="#projects" className={styles.ctaButton}>
            Explore My Work
          </a>
        </div>

        {/* Optional Image/Placeholder */}
        <div className={styles.imageContent}>
          <div className={styles.imagePlaceholder}>
            {/* Replace with your image or illustration */}
            <span>Profile Image</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;