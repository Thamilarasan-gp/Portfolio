import { useState } from 'react';
import { FiSend, FiUser, FiMail, FiGlobe, FiMessageSquare } from 'react-icons/fi';
import styles from './Contact.module.css';
import contactImage from '../assets/Myprofile.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Get in touch</h2>
            <div className={styles.underline}></div>
            <p className={styles.subtitle}>
              Have a project in mind or want to collaborate? Drop me a message!
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <div className={styles.inputContainer}>
                <FiUser className={styles.inputIcon} />
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  required
                />
                <div className={styles.focusBorder}></div>
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <div className={styles.inputContainer}>
                <FiMail className={styles.inputIcon} />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Where can I reach you?"
                  required
                />
                <div className={styles.focusBorder}></div>
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <div className={styles.inputContainer}>
                <FiGlobe className={styles.inputIcon} />
                <input
                  type="url"
                  id="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                />
                <div className={styles.focusBorder}></div>
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <div className={styles.textareaContainer}>
                <FiMessageSquare className={styles.textareaIcon} />
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  required
                ></textarea>
                <div className={styles.focusBorder}></div>
              </div>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              <FiSend className={styles.buttonIcon} />
              Send Message
            </button>
          </form>
        </div>
        
        <div className={styles.imageContainer}>
          <img 
            src={contactImage} 
            alt="Contact me" 
            className={styles.contactImage} 
          />
          <div className={styles.imageOverlay}></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;