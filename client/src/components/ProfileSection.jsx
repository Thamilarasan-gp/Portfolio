import React, { useState, useEffect, useRef } from 'react';
import styles from './ProfileSection.module.css';
import Myprofile from '../assets/Myprofile.png';
function ProfileSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeShape, setActiveShape] = useState(null);
  const [textIndex, setTextIndex] = useState(0);
  const profileRef = useRef(null);

  const texts = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast", "Open Source Contributor"];

  // Handle scroll and mouse effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };

    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(textInterval);
    };
  }, []);

  // Floating shapes data
  const shapes = [
    { src: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png", alt: "C++", className: styles.shape1 },
    { src: "https://cdn-icons-png.flaticon.com/512/226/226777.png", alt: "Java", className: styles.shape2 },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png", alt: "TypeScript", className: styles.shape3 },
    { src: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png", alt: "Python", className: styles.shape4 },
    { src: "https://cdn-icons-png.flaticon.com/512/919/919825.png", alt: "Node.js", className: styles.shape5 },
  ];

  return (
    <div className={styles.container} ref={profileRef}>
      {/* Animated gradient background */}
      <div className={styles.animatedBg}></div>
      
      {/* Floating tech bubbles */}
      <div className={styles.bubbles}>
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className={styles.bubble}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main content with parallax effect */}
      <div 
        className={styles.content}
        style={{
          transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 20}px)`
        }}
      >
        {/* Profile image with halo effect */}
        <div className={styles.profileWrapper}>
          <div className={styles.halo}></div>
          <img
            src={Myprofile} className={`${styles.profileImage} ${isScrolled ? styles.scrolled : ''}`}
            alt="Thamil Arasan"
          />
          <div className={styles.glowingOrb}></div>
        </div>

        {/* Text content */}
        <h1 className={styles.name}>
          Hi, I'm <span className={styles.highlight}>Thamil</span>
        </h1>
        
        {/* Animated rotating text */}
        <div className={styles.rotatingText}>
          <div className={styles.textSlider} style={{ transform: `translateY(-${textIndex * 100}%)` }}>
            {texts.map((text, i) => (
              <div key={i} className={styles.textItem}>{text}</div>
            ))}
          </div>
        </div>

        {/* Animated hire button */}
        <button className={styles.hireButton}>
          <span>Hire Me</span>
          <div className={styles.buttonStars}>
            {[...Array(5)].map((_, i) => (
              <div key={i} className={styles.star}></div>
            ))}
          </div>
        </button>
      </div>

      {/* Floating tech shapes */}
      <div className={styles.shapesContainer}>
        {shapes.map((shape, i) => (
          <img
            key={i}
            src={shape.src}
            className={`${styles.shape} ${shape.className} ${activeShape === i ? styles.shapeActive : ''}`}
            alt={shape.alt}
            onMouseEnter={() => setActiveShape(i)}
            onMouseLeave={() => setActiveShape(null)}
          />
        ))}
      </div>

      {/* Scrolling indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.scroller}></div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;