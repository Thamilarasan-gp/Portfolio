import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Chatbot.module.css';
import robotIcon from '../assets/bot.png';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Greetings! I’m Kitti 😺, Thamilarasan’s portfolio bot. Ask about his skills, projects, or accounts!' },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    const generatedId = Math.random().toString(36).substring(2, 15);
    setUserId(generatedId);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://portfolio-ekct.onrender.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, userId }),
      });

      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      setMessages((prev) => [...prev, { sender: 'bot', text: data.response }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Kitti 😺 hit an error. Try again!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Debounce input to prevent rapid API calls
  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      if (e.target.value.trim() && e.key === 'Enter') handleSendMessage();
    }, 300);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const TypingIndicator = () => (
    <motion.div 
      className={styles.typingIndicator}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {[...Array(3)].map((_, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -4, 0] }}
          transition={{ 
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
            delay: i * 0.2
          }}
        />
      ))}
    </motion.div>
  );

  return (
    <div className={styles.container}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              type: 'spring',
              damping: 20,
              stiffness: 300,
              mass: 0.5
            }}
            className={styles.chatWindow}
          >
            <div className={styles.chatHeader}>
              <div className={styles.headerContent}>
                <img src={robotIcon} alt="Chatbot" className={styles.headerIcon} />
                <span>Kitti - Portfolio Bot</span>
              </div>
              <motion.button 
                onClick={toggleChat} 
                className={styles.closeButton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                ×
              </motion.button>
            </div>
            <div className={styles.messagesContainer}>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: msg.sender === 'user' ? 10 : -10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.1 }
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`${styles.message} ${msg.sender === 'user' ? styles.userMessage : styles.botMessage}`}
                >
                  {msg.text}
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`${styles.message} ${styles.botMessage} ${styles.typingContainer}`}
                >
                  <TypingIndicator />
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <motion.div 
              className={styles.inputContainer}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className={styles.inputField}
                placeholder="Ask Kitti 😺 about Me..."
                disabled={isLoading}
              />
              <motion.button 
                onClick={handleSendMessage} 
                className={styles.sendButton} 
                disabled={isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div 
        className={styles.robotIcon} 
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        animate={{
          rotate: isOpen ? [0, 15, -15, 0] : 0,
          y: isOpen ? [0, -8, 0] : 0
        }}
        transition={{
          duration: 0.6,
          times: isOpen ? [0, 0.2, 0.4, 0.6] : undefined
        }}
      >
        <img src={robotIcon} alt="Chatbot" />
        {!isOpen && (
          <motion.div 
            className={styles.notificationDot}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ 
              repeat: 3,
              repeatType: "reverse",
              duration: 0.8,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default Chatbot;