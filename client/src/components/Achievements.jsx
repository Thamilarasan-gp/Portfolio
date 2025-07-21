import React, { useState, useEffect, useRef } from "react";
import styles from "./Achievements.module.css";
import { FaTrophy, FaAward, FaMedal, FaCertificate } from "react-icons/fa";
import MyProfileImage from '../assets/Myprofile.png'; // Fallback image
import KPRLogo from '../assets/Myprofile.png'; // Example logos
import PSGLogo from '../assets/Myprofile.png';
import NGPLogo from '../assets/Myprofile.png';
import EshwarLogo from '../assets/Myprofile.png';

const achievements = [
  {
    id: 1,
    title: "Runner Up – 24-Hour Hackathon",
    institution: "KPR Institute of Engineering & Technology",
    date: "Feb 2025",
    icon: <FaAward className={styles.icon} />,
    color: "#f59e0b",
    gradientClass: "amber",
    institutionLogo: KPRLogo,
    points: [
      "Secured 2nd place among 100+ teams by developing a mobile app in 24 hours.",
      "Awarded ₹2,000 and selected for an internship at Ai Futurix."
    ]
  },
  {
    id: 2,
    title: "Runner Up – Web Development, Kriya 2K24",
    institution: "PSG College of Technology",
    date: "Mar 2024",
    icon: <FaMedal className={styles.icon} />,
    color: "#3b82f6",
    gradientClass: "blue",
    institutionLogo: PSGLogo,
    points: [
      "Won 2nd place at PSG Tech's national-level tech fest.",
      "Developed a standout full-stack web application. Awarded ₹2,000."
    ]
  },
  {
    id: 3,
    title: "2nd Place – Project Expo, Kanam Event 2025",
    institution: "Dr. NGP Institute of Technology",
    date: "Feb 2025",
    icon: <FaCertificate className={styles.icon} />,
    color: "#8b5cf6",
    gradientClass: "purple",
    institutionLogo: NGPLogo,
    points: [
      "Secured ₹3,000 for an innovative project with strong idea validation and execution."
    ]
  },
  {
    id: 4,
    title: "Runner Up – Freshathon",
    institution: "Sri Eshwar College of Engineering",
    date: "Jun 2024",
    icon: <FaMedal className={styles.icon} />,
    color: "#10b981",
    gradientClass: "emerald",
    institutionLogo: EshwarLogo,
    points: [
      "Built a Smart Parking System with real-time tracking and booking.",
      "Placed among top 3 out of 15 teams. Prize: ₹5,000."
    ]
  },
  {
    id: 5,
    title: "Winner – Buildathon Expo",
    institution: "Sri Eshwar College of Engineering",
    date: "Oct 2023",
    icon: <FaTrophy className={styles.icon} />,
    color: "#ec4899",
    gradientClass: "pink",
    institutionLogo: EshwarLogo,
    points: [
      "Achieved 1st place among 20+ teams in a C-based Buildathon.",
      "Recognized for optimized logic and performance under constraints."
    ]
  },
  {
    id: 6,
    title: "Runner Up – Mini Project Expo 2K25",
    institution: "Sri Eshwar College of Engineering",
    date: "Apr 2025",
    icon: <FaCertificate className={styles.icon} />,
    color: "#6366f1",
    gradientClass: "indigo",
    institutionLogo: EshwarLogo,
    points: [
      "Developed a real-time ticketing system with live tracking, QR pay, and alerts.",
      "Focused on solving public transport inefficiencies."
    ]
  }
];

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        threshold: 0.3,
        ...options
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return [targetRef, isIntersecting];
};

const AchievementItem = ({ achievement, index }) => {
  const [itemRef, isVisible] = useIntersectionObserver();
  const defaultImage = MyProfileImage;
  const [imgSrc, setImgSrc] = useState(achievement.institutionLogo || defaultImage);

  return (
    <div
      ref={itemRef}
      className={`${styles.achievementItem} ${isVisible ? styles.visible : ''}`}
      style={{ '--delay': `${index * 150}ms` }}
    >
      <div className={styles.timelineDot}>
        <div className={`${styles.iconContainer} ${styles[achievement.gradientClass]}`}>
          {achievement.icon}
          <div className={`${styles.pulseRing} ${styles[achievement.gradientClass]}`}></div>
        </div>
      </div>

      <div className={`${styles.contentCard} ${styles.group}`}>
        <div className={styles.logoContainer}>
          {/* <img
            src={imgSrc}
            alt={achievement.institution}
            className={styles.institutionLogo}
            onError={() => setImgSrc(defaultImage)}
          /> */}
        </div>
        <div className={`${styles.backgroundGradient} ${styles[achievement.gradientClass]}`}></div>
        <div className={styles.dateBadge}>{achievement.date}</div>
        <h3 className={styles.title}>{achievement.title}</h3>
        <p className={styles.institution}>
          <span className={styles.institutionDot}></span>
          {achievement.institution}
        </p>
        <ul className={styles.pointsList}>
          {achievement.points.map((point, pointIndex) => (
            <li key={pointIndex} className={styles.point}>
              <span className={`${styles.pointDot} ${styles[achievement.gradientClass]}`}></span>
              {point}
            </li>
          ))}
        </ul>
        <div className={`${styles.cornerAccent} ${styles[achievement.gradientClass]}`}></div>
      </div>
    </div>
  );
};

const Achievements = () => {
  const [headerRef, headerVisible] = useIntersectionObserver();

  return (
    <section className={styles.achievementsSection}>
      <div className={`${styles.bgDecoration} ${styles.bgDecorationLeft}`}></div>
      <div className={`${styles.bgDecoration} ${styles.bgDecorationRight}`}></div>
      <div className={styles.container}>
        <div
          ref={headerRef}
          className={`${styles.header} ${headerVisible ? styles.headerVisible : ''}`}
        >
          <div className={styles.headerBadge}>
            <span className={styles.headerBadgeText}>ACHIEVEMENTS & RECOGNITION</span>
          </div>
          <h2 className={styles.headerTitle}>
            Journey of
            <span className={styles.headerTitleGradient}> Excellence</span>
          </h2>
          <p className={styles.headerSubtitle}>
            Awards, certifications, and milestones that mark my path of continuous growth and innovation
          </p>
        </div>
        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine}></div>
          <div className={styles.achievementsList}>
            {achievements.map((achievement, index) => (
              <AchievementItem key={achievement.id} achievement={achievement} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;