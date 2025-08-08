import React, { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = (item) => {
    setActiveItem(item);
    setIsMobileMenuOpen(false);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
        {/* Left side - Profile (visible when sticky) */}
        <div className={`${styles.profileContainer} ${isSticky ? styles.visible : ''}`}>
          <img 
            src="https://avatars.githubusercontent.com/u/151711988?v=4" 
            alt="Profile" 
            className={styles.profileImage}
          />
          <span className={styles.profileName}>Thamil Arasan</span>
        </div>

        {/* Center - Navigation Menu */}
        <ul className={`${styles.navbarMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <li>
            <a
              href="#home"
              className={activeItem === 'home' ? styles.active : ''}
              onClick={() => handleClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeItem === 'about' ? styles.active : ''}
              onClick={() => handleClick('about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#stack"
              className={activeItem === 'stack' ? styles.active : ''}
              onClick={() => handleClick('stack')}
            >
              Stack
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeItem === 'projects' ? styles.active : ''}
              onClick={() => handleClick('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeItem === 'contact' ? styles.active : ''}
              onClick={() => handleClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right side - Resume Button (visible when sticky) */}
        <div className={`${styles.resumeContainer} ${isSticky ? styles.visible : ''}`}>
          <a 
            href="https://drive.google.com/file/d/1vi0zhdQhvWiwkBqzc_Te6fvEO00QaZQ1/view?usp=sharing" 
            download 
            className={styles.resumeButton}
          >
            <FiDownload className={styles.downloadIcon} />
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={isMobileMenuOpen ? styles.open : ''}></span>
          <span className={isMobileMenuOpen ? styles.open : ''}></span>
          <span className={isMobileMenuOpen ? styles.open : ''}></span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
