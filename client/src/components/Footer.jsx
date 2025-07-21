
import styles from './Footer.module.css';
import { FaUser, FaLaptopCode, FaBriefcase, FaFolder, FaTrophy, FaEnvelope } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      {/* Profile/Info */}
      <div className={styles.profileSection}>
        <div className={styles.profileTitle}>
          <span className={styles.profileName}>Thamilarasan G P</span>
        </div>
        <div className={styles.profileDesc}>
          Full Stack Developer passionate about creating innovative digital solutions.
        </div>
      </div>

      {/* Quick Links */}
      <div className={styles.quickLinks}>
        <div className={styles.linksTitle}>Quick Links</div>
        <div className={styles.linksGrid}>
          <a href="#about">
            <FaUser className={styles.linkIcon} /> About
          </a>
          <a href="#skills">
            <FaLaptopCode className={styles.linkIcon} /> Skills
          </a>
          <a href="#experience">
            <FaBriefcase className={styles.linkIcon} /> Experience
          </a>
          <a href="#projects">
            <FaFolder className={styles.linkIcon} /> Projects
          </a>
          <a href="#achievements">
            <FaTrophy className={styles.linkIcon} /> Achievements
          </a>
          <a href="#contact">
            <FaEnvelope className={styles.linkIcon} /> Contact
          </a>
        </div>
      </div>

      {/* Connect/Social */}
      <div className={styles.connectSection}>
        <div className={styles.linksTitle}>Connect</div>
        <div className={styles.socialIcons}>
          <a href="#" aria-label="GitHub">
            <FiGithub size={24} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FiLinkedin size={24} />
          </a>
          <a href="#" aria-label="Email">
            <FiMail size={24} />
          </a>
        </div>
        <button 
          className={styles.backToTop} 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <FiArrowUp className={styles.arrowIcon} /> Back to Top
        </button>
      </div>
    </div>
    <hr className={styles.divider} />
    <div className={styles.copyright}>
      © {new Date().getFullYear()} Thamilarasan G P. All rights reserved.
    </div>
  </footer>
);

export default Footer;