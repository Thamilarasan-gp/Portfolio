import React from 'react';
import styles from './Contact.module.css';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Icons for contact and social media

const Contact = () => {
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
    <section id="contact" className={styles.contact}>
      <div className={styles.contactContainer}>
        <h2 className={styles.title}>Get in Touch</h2>
        <div className={styles.contactContent}>
          {/* Contact Form */}
          <div className={styles.formSection}>
            <h3 className={styles.sectionTitle}>Send a Message</h3>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.formInput}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.formInput}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.formTextarea}
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className={styles.detailsSection}>
            <h3 className={styles.sectionTitle}>Contact Details</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <a
                  href="mailto:your.email@example.com"
                  className={styles.contactLink}
                >
                  your.email@example.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <FaLinkedin className={styles.contactIcon} />
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  /yourusername
                </a>
              </li>
              <li className={styles.contactItem}>
                <FaGithub className={styles.contactIcon} />
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  /yourusername
                </a>
              </li>
            </ul>
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
      </div>
    </section>
  );
};

export default Contact;