import { useState } from 'react';
import { FiSend, FiUser, FiMail, FiPhone, FiGlobe, FiMessageSquare, FiCheckCircle, FiPhoneCall } from 'react-icons/fi';
import styles from './Contact.module.css';
import contactImage from '../assets/Myprofile.png';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [language] = useState('en');
  const [isCallHovered, setIsCallHovered] = useState(false);

  // Replace with your actual phone number
  const phoneNumber = '+919566699153';

  const translations = {
    en: {
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
      sending: 'Sending...',
      formTitle: 'Get in Touch',
      formSubtitle: 'Have a project in mind or want to collaborate? Drop me a message!',
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      phonePlaceholder: "Your phone number",
      websitePlaceholder: "Your website (optional)",
      messagePlaceholder: "Your message",
      buttonText: 'Send Message',
      callText: 'Call Me'
    },
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);

    try {
      const formDataToSend = new FormData(event.target);
      formDataToSend.append("access_key", "3ad49a59-ac51-4751-afe0-c7ce48feab58");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', website: '', message: '' });
        event.target.reset();
        
        Swal.fire({
          title: "Success!",
          text: translations[language].success,
          icon: "success",
          timer: 3000,
          showConfirmButton: false,
          background: '#ffffff',
          backdrop: `
            rgba(0,0,0,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `,
          customClass: {
            popup: styles.successPopup
          }
        });
      } else {
        throw new Error(data.message || translations[language].error);
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        timer: 3000,
        showConfirmButton: false
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img 
            src={contactImage} 
            alt="Contact me" 
            className={styles.contactImage} 
          />
          <div className={styles.imageOverlay}></div>
          <div className={styles.phoneButtonContainer}>
            <button 
              onClick={handleCallClick}
              className={`${styles.phoneButton} ${isCallHovered ? styles.phoneButtonHover : ''}`}
              aria-label="Call me"
              onMouseEnter={() => setIsCallHovered(true)}
              onMouseLeave={() => setIsCallHovered(false)}
            >
              <div className={styles.phoneIconWrapper}>
                <FiPhoneCall className={styles.phoneIcon} />
                {isCallHovered && (
                  <div className={styles.phoneRipple}></div>
                )}
              </div>
              <span>{translations[language].callText}</span>
            </button>
          </div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>{translations[language].formTitle}</h2>
            <div className={styles.underline}></div>
            <p className={styles.subtitle}>
              {translations[language].formSubtitle}
            </p>
          </div>
          
          {isSuccess ? (
            <div className={styles.successContainer}>
              <FiCheckCircle className={styles.successIcon} />
              <h3 className={styles.successTitle}>Thank You!</h3>
              <p className={styles.successMessage}>{translations[language].success}</p>
              <button 
                className={styles.submitButton}
                onClick={() => setIsSuccess(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <div className={styles.inputContainer}>
                    <FiUser className={styles.inputIcon} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={translations[language].namePlaceholder}
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
                      placeholder={translations[language].emailPlaceholder}
                      required
                    />
                    <div className={styles.focusBorder}></div>
                  </div>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <div className={styles.inputContainer}>
                    <FiPhone className={styles.inputIcon} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={translations[language].phonePlaceholder}
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
                      placeholder={translations[language].websitePlaceholder}
                    />
                    <div className={styles.focusBorder}></div>
                  </div>
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
                    placeholder={translations[language].messagePlaceholder}
                    required
                  ></textarea>
                  <div className={styles.focusBorder}></div>
                </div>
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className={styles.spinner}></span>
                ) : (
                  <>
                    <FiSend className={styles.buttonIcon} />
                    {translations[language].buttonText}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;