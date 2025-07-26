import { useState, useRef } from 'react';
import { FiSend, FiUser, FiMail, FiGlobe, FiMessageSquare } from 'react-icons/fi';
import HCaptcha from '@hcaptcha/react-hcaptcha'; // Import hCaptcha
import styles from './Contact.module.css';
import contactImage from '../assets/Myprofile.png';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');
  const [language, setLanguage] = useState('en');
  const captchaRef = useRef(null);

  const translations = {
    en: {
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
      captchaError: 'Please complete the CAPTCHA.'
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Basic spam keyword filtering
    if (id === 'message' && /seo|free|buy/i.test(value)) {
      Swal.fire({
        title: 'Invalid Input',
        text: 'Please avoid using promotional terms in your message.',
        icon: 'warning',
        timer: 3000,
        showConfirmButton: false
      });
      return;
    }
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult(translations[language].sending);

    // Verify CAPTCHA
    const token = captchaRef.current?.getValue();
    if (!token) {
      Swal.fire({
        title: 'Error!',
        text: translations[language].captchaError,
        icon: 'error',
        timer: 3000,
        showConfirmButton: false
      });
      setIsLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData(event.target);
      formDataToSend.append('access_key', '3ad49a59-ac51-4751-afe0-c7ce48feab58');
      formDataToSend.append('h-captcha-response', token);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: 'Success!',
          text: translations[language].success,
          icon: 'success',
          timer: 3000,
          showConfirmButton: false
        });
        setFormData({ name: '', email: '', website: '', message: '' });
        event.target.reset();
        captchaRef.current?.reset();
      } else {
        throw new Error(data.message || translations[language].error);
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        timer: 3000,
        showConfirmButton: false
      });
      setResult(error.message);
    } finally {
      setIsLoading(false);
    }
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
                  name="name"
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
                  name="email"
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
                  name="website"
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
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  required
                ></textarea>
                <div className={styles.focusBorder}></div>
              </div>
            </div>

            {/* Honeypot field */}
            <input type="text" name="bot_field" style={{ display: 'none' }} />

            {/* hCaptcha */}
            <div className={styles.formGroup}>
              <HCaptcha
                sitekey="YOUR_HCAPTCHA_SITE_KEY"
                onVerify={() => {}}
                ref={captchaRef}
              />
            </div>

            {result && (
              <div className={styles.resultMessage}>
                {result}
              </div>
            )}
            
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isLoading}
            >
              <FiSend className={styles.buttonIcon} />
              {isLoading ? 'Sending...' : 'Send Message'}
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