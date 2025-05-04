import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      icon: <FaLinkedin size={24} />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/yourusername',
      icon: <FaGithub size={24} />,
    },
    {
      name: 'X',
      href: 'https://x.com/yourusername',
      icon: <FaTwitter size={24} />,
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className={styles.footerLink}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Contact</h3>
          <p className={styles.contactInfo}>
            Email:{' '}
            <a
              href="mailto:your.email@example.com"
              className={styles.footerLink}
            >
              your.email@example.com
            </a>
          </p>
          <p className={styles.contactInfo}>
            LinkedIn:{' '}
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              /yourusername
            </a>
          </p>
          <p className={styles.contactInfo}>
            GitHub:{' '}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              /yourusername
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Follow Me</h3>
          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;