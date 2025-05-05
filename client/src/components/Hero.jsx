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

  // Handle mouse movement for parallax effects with smoothing
  useEffect(() => {
    let animationFrameId;
    let targetMousePosition = { x: 0, y: 0 };
    let currentMousePosition = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      targetMousePosition = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };

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

    // Circle background parallax
    if (circleRef.current) {
      circleRef.current.style.transform = `translate(${
        mousePosition.x * 50 - 25
      }px, ${mousePosition.y * 50 - 25}px)`;
    }

    // Profile image parallax
    if (profileRef.current) {
      profileRef.current.style.transform = `translate(${
        mousePosition.x * 30 - 15
      }px, ${mousePosition.y * 30 - 15}px) rotate(${mousePosition.x * 8}deg)`;
    }

    // Title parallax
    if (titleRef.current) {
      titleRef.current.style.transform = `translate(${
        mousePosition.x * -20
      }px, ${mousePosition.y * -20}px)`;
    }

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

  // Generate floating particles
  const renderParticles = () => {
    return Array(20)
      .fill(null)
      .map((_, index) => (
        <div
          key={index}
          className={`${styles.particle} ${styles.parallaxElement}`}
          data-speed={Math.random() * 15 + 5}
          data-direction={index % 2 === 0 ? "normal" : "reverse"}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            opacity: Math.random() * 0.5 + 0.3,
          }}
        />
      ));
  };

  // Generate grid lines
  const renderGridLines = () => {
    return (
      <div className={styles.gridContainer}>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <div
              key={`h-${i}`}
              className={`${styles.gridLine} ${styles.horizontalLine}`}
              style={{ top: `${(i + 1) * 20}%` }}
            />
          ))}
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <div
              key={`v-${i}`}
              className={`${styles.gridLine} ${styles.verticalLine}`}
              style={{ left: `${(i + 1) * 20}%` }}
            />
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

      {/* Background elements */}
      <div className={styles.heroBackground}>
        <div className={styles.circle} ref={circleRef}></div>
        <div
          className={`${styles.circle2} ${styles.parallaxElement}`}
          data-speed="20"
          data-direction="normal"
        ></div>
        <div
          className={`${styles.circle3} ${styles.parallaxElement}`}
          data-speed="15"
          data-direction="reverse"
        ></div>
        <div className={styles.scanlines}></div>
        {renderParticles()}
        {renderGridLines()}
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

      {/* Caution tape style elements */}
     

      <div className={styles.heroContainer}>
        {/* Text Content */}
        <div
          className={`${styles.textContent} ${isLoaded ? styles.textLoaded : ""}`}
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
        </div>

        {/* Profile Image */}
        <div
          className={`${styles.imageContent} ${isLoaded ? styles.imageLoaded : ""}`}
        >
          <div className={styles.profileWrapper} ref={profileRef}>
            <div className={styles.profileImage}>
              {/* Replace with your actual image */}
              <img
                src="/images/profile.jpg"
                alt="Profile picture of Thamilarasan"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.profileGlow}></div>
            <div className={styles.profileRing}></div>
            <div className={styles.profileRing2}></div>

            {/* Orbiting elements */}
            <div className={styles.orbitingElementsContainer}>
              {Array(3)
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
          </div>
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