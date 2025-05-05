"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";
import styles from "./Hero.module.css";
import Myprofile from "../assets/Myprofile.png";
import { useSpring, animated } from "@react-spring/web";

const Hero = () => {
  const heroRef = useRef(null);
  const socialIconsRef = useRef(null);
  const circleRef = useRef(null);
  const profileRef = useRef(null);
  const titleRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [tiltAngle, setTiltAngle] = useState({ x: 0, y: 0 });

  // Smooth animations with react-spring
  const profileSpring = useSpring({
    transform: isLoaded 
      ? `perspective(1000px) rotateY(${tiltAngle.x}deg) rotateX(${-tiltAngle.y}deg) translateZ(50px)`
      : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)',
    config: { mass: 5, tension: 350, friction: 40 }
  });

  const titleSpring = useSpring({
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0px)' : 'translateY(40px)',
    config: { mass: 1, tension: 280, friction: 60 }
  });

  const floatingElements = useSpring({
    from: { y: 0 },
    to: async (next) => {
      while (true) {
        await next({ y: -20 });
        await next({ y: 0 });
      }
    },
    config: { duration: 4000 },
    loop: true,
  });

  // Handle mouse movement for 3D effect with smoothing
  useEffect(() => {
    let animationFrameId;
    let targetMousePosition = { x: 0, y: 0 };
    let currentMousePosition = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      // Calculate mouse position relative to hero section center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      targetMousePosition = {
        x: (e.clientX - rect.left - centerX) / centerX, // Range from -1 to 1
        y: (e.clientY - rect.top - centerY) / centerY,  // Range from -1 to 1
      };

      // Calculate tilt angle based on mouse position (limited to ±15 degrees)
      setTiltAngle({
        x: targetMousePosition.x * 15,
        y: targetMousePosition.y * 15
      });

      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const smoothMouseMovement = () => {
      // Smooth interpolation for mouse movement
      currentMousePosition.x +=
        (targetMousePosition.x - currentMousePosition.x) * 0.1;
      currentMousePosition.y +=
        (targetMousePosition.y - currentMousePosition.y) * 0.1;

      setMousePosition(currentMousePosition);

      animationFrameId = requestAnimationFrame(smoothMouseMovement);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(smoothMouseMovement);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Handle scroll for parallax effects with smoothing
  useEffect(() => {
    let animationFrameId;
    let targetScrollPosition = 0;
    let currentScrollPosition = 0;

    const handleScroll = () => {
      targetScrollPosition = window.scrollY;
    };

    const smoothScrollMovement = () => {
      // Smooth interpolation for scroll
      currentScrollPosition +=
        (targetScrollPosition - currentScrollPosition) * 0.1;

      setScrollPosition(currentScrollPosition);

      animationFrameId = requestAnimationFrame(smoothScrollMovement);
    };

    window.addEventListener("scroll", handleScroll);
    animationFrameId = requestAnimationFrame(smoothScrollMovement);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Apply parallax effects based on mouse position and scroll
  useEffect(() => {
    if (!heroRef.current) return;

    // Apply parallax to all elements with the parallax class
    const parallaxElements = document.querySelectorAll(
      `.${styles.parallaxElement}`
    );
    parallaxElements.forEach((element) => {
      const speed = Number.parseFloat(element.dataset.speed || "5");
      const direction = element.dataset.direction || "normal";
      const xFactor = direction === "reverse" ? -1 : 1;
      const yFactor = direction === "reverse" ? -1 : 1;
      element.style.transform = `translate(${
        mousePosition.x * speed * xFactor
      }px, ${mousePosition.y * speed * yFactor}px)`;
    });
  }, [mousePosition, scrollPosition]);

  // Animation for social icons with staggered delay
  useEffect(() => {
    const socialIcons = document.querySelectorAll(`.${styles.socialIcon}`);
    socialIcons.forEach((icon, index) => {
      icon.style.animationDelay = `${index * 0.15}s`;
    });

    // Set loaded state for entrance animations
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  // Generate floating particles with 3D depth
  const renderParticles = () => {
    return Array(30)
      .fill(null)
      .map((_, index) => {
        const isSmall = Math.random() > 0.7;
        const depth = Math.random() * 100; // Z-depth between 0-100
        const size = isSmall ? Math.random() * 5 + 2 : Math.random() * 15 + 8;
        const colorIndex = Math.floor(Math.random() * 6);
        const colors = ['#9cf6fb', '#e1fcfd', '#394f8a', '#4a5fc1', '#e5b9a8', '#ead6cd'];
        
        return (
          <div
            key={index}
            className={`${styles.particle} ${styles.parallaxElement}`}
            data-speed={Math.random() * 15 + 5}
            data-direction={index % 2 === 0 ? "normal" : "reverse"}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 15}s`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: 0.3 + (depth / 100) * 0.6, // Deeper particles are more visible
              backgroundColor: colors[colorIndex],
              boxShadow: `0 0 ${size/2}px ${colors[colorIndex]}`,
              filter: `blur(${isSmall ? 0 : 2}px)`,
              transform: `translateZ(${depth}px)`,
            }}
          />
        );
      });
  };

  // Generate 3D grid for depth
  const render3DGrid = () => {
    return (
      <div className={styles.grid3DContainer}>
        {Array(6).fill(null).map((_, i) => (
          <div 
            key={`grid-plane-${i}`} 
            className={styles.gridPlane}
            style={{
              transform: `translateZ(${i * -50}px) rotateX(90deg)`,
              opacity: 1 - (i * 0.15)
            }}
          >
            {Array(5).fill(null).map((_, j) => (
              <div 
                key={`grid-line-${j}`}
                className={styles.gridLine3D}
                style={{
                  left: `${j * 25}%`,
                }}
              />
            ))}
            {Array(5).fill(null).map((_, j) => (
              <div 
                key={`grid-line-h-${j}`}
                className={`${styles.gridLine3D} ${styles.horizontal}`}
                style={{
                  top: `${j * 25}%`,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };

  // Social media links for accessibility
  const socialLinks = [
    {
      Icon: FaLinkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    { Icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { Icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    {
      Icon: FaDribbble,
      href: "https://dribbble.com",
      label: "Dribbble",
    },
    {
      Icon: FaInstagram,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      Icon: FaBehance,
      href: "https://behance.net",
      label: "Behance",
    },
  ];

  return (
    <section
      id="home"
      className={`${styles.hero} ${isLoaded ? styles.loaded : ""}`}
      ref={heroRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Custom cursor */}
      {isHovering && (
        <div
          className={styles.customCursor}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        >
          <div className={styles.cursorRing}></div>
          <div className={styles.cursorDot}></div>
        </div>
      )}

      {/* 3D Background Scene */}
      <div className={styles.scene3D}>
        {render3DGrid()}
        
        <div className={styles.heroBackground}>
          <div 
            className={styles.circle} 
            ref={circleRef}
            style={{
              transform: `translate(-50%, -50%) translateZ(10px) scale(${isLoaded ? 1 : 0.8})`,
            }}
          ></div>
          <animated.div
            className={`${styles.circle2} ${styles.parallaxElement}`}
            data-speed="20"
            data-direction="normal"
            style={{
              ...floatingElements,
              transform: `translateZ(30px) scale(${isLoaded ? 1 : 0.5})`,
            }}
          ></animated.div>
          <animated.div
            className={`${styles.circle3} ${styles.parallaxElement}`}
            data-speed="15"
            data-direction="reverse"
            style={{
              ...floatingElements,
              transform: `translateZ(20px) scale(${isLoaded ? 1 : 0.5})`,
            }}
          ></animated.div>
          <div className={styles.scanlines}></div>
          {renderParticles()}
        </div>
      </div>

      {/* Flowing social icons */}
      <div className={styles.socialIconsContainer} ref={socialIconsRef}>
        {socialLinks.map(({ Icon, href, label }, index) => (
          <a
            key={index}
            href={href}
            className={styles.socialIcon}
            aria-label={`Visit my ${label} profile`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
            <div className={styles.iconTooltip}>{label}</div>
          </a>
        ))}
      </div>

      <div className={styles.heroContainer}>
        {/* Text Content with 3D effect */}
        <animated.div
          className={`${styles.textContent} ${isLoaded ? styles.textLoaded : ""}`}
          style={titleSpring}
        >
          <div className={styles.titleWrapper}>
            <h1 className={styles.title} ref={titleRef}>
              <span className={styles.animatedText}>
                <span
                  className={styles.glitchText}
                  data-text="BRING YOUR"
                >
                  BRING YOUR
                </span>
              </span>
              <span className={styles.animatedText}>
                <span
                  className={styles.glitchText}
                  data-text="TEAM TOGETHER"
                >
                  TEAM TOGETHER
                </span>
              </span>
              <span className={styles.animatedText}>
                <span
                  className={styles.glitchText}
                  data-text="RIGHT HERE."
                >
                  RIGHT HERE.
                </span>
              </span>
            </h1>
          </div>
          <p className={styles.tagline}>• AVAILABLE FOR PROJECT</p>
          <div className={styles.signature}>
            <span>Thamilarasan</span>
          </div>
          <div className={styles.description}>
            I DESIGN FOR HUMANS TO IMPROVE
            <br />
            DESIGN & EXPERIENCE
          </div>
          <div className={styles.ctaContainer}>
            <a href="#contact" className={styles.ctaButton} role="button">
              <span className={styles.ctaText}>HIRE ME</span>
              <span className={styles.ctaHover}></span>
              <div className={styles.ctaParticles}>
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i} className={styles.ctaParticle}></span>
                  ))}
              </div>
            </a>
          </div>
        </animated.div>

        {/* Profile Image with 3D tilt effect */}
        <div
          className={`${styles.imageContent} ${isLoaded ? styles.imageLoaded : ""}`}
        >
          <animated.div 
            className={styles.profileWrapper} 
            style={profileSpring}
          >
            <div className={styles.profileImage}>
              <img
                src={Myprofile || "/placeholder.svg"}
                alt="Profile picture of Thamilarasan"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.profileGlow}></div>
            <div className={styles.profileRing}></div>
            <div className={styles.profileRing2}></div>

            {/* Orbiting elements */}
            <div className={styles.orbitingElementsContainer}>
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className={styles.orbitingElement}
                    style={{
                      animationDelay: `${i * -3}s`,
                      animationDuration: `${15 + i * 5}s`,
                    }}
                  >
                    <div className={styles.orbitingDot}></div>
                  </div>
                ))}
            </div>
          </animated.div>
        </div>
      </div>

      {/* Hire me ribbon at the bottom */}
      <div className={styles.hireRibbonContainer}>
        <div className={styles.hireRibbon}>
          {Array(20)
            .fill(null)
            .map((_, i) => (
              <div key={i} className={styles.hireTag}>
                HIRE ME
              </div>
            ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className={`${styles.corner} ${styles.cornerTopLeft}`}></div>
      <div className={`${styles.corner} ${styles.cornerTopRight}`}></div>
      <div className={`${styles.corner} ${styles.cornerBottomLeft}`}></div>
      <div className={`${styles.corner} ${styles.cornerBottomRight}`}></div>

      {/* Animated noise overlay */}
      <div className={styles.noiseOverlay}></div>
    </section>
  );
};

export default Hero;
