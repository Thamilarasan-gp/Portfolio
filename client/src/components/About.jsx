import React, { useEffect, useRef } from "react";
import styles from "./About.module.css";
import img1 from "../assets/Myprofile.png";

const About = () => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
        };
    }, []);

    return (
        <section id="about" className={`${styles.aboutSection} ${styles.hidden}`} ref={aboutRef}>
            <div className={styles.aboutContainer}>
                <div className={styles.aboutImage}>
                    <div className={styles.imageWrapper}>
                        <img src={img1} alt="Profile" className={styles.profileImage} />
                        <div className={styles.imageBorder}></div>
                        <div className={styles.imageGlow}></div>
                    </div>
                </div>
                <div className={styles.aboutContent}>
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleText}>About Me</span>
                        <span className={styles.titleUnderline}></span>
                    </h2>
                    <div className={styles.aboutText}>
                        <p>Welcome to my portfolio! I'm a passionate Full Stack Developer currently pursuing B.Tech in Information Technology at Sri Eshwar College of Engineering. I specialize in creating innovative web solutions using modern technologies and frameworks.</p>
                        <p>My journey in software development began with a curiosity about how things work behind the scenes. This curiosity has evolved into a deep passion for creating user-centric applications that solve real-world problems.</p>
                    </div>
                    <div className={styles.aboutActions}>
                        <button className={styles.resumeButton}>
                            <span>Download Resume</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 16L7 11L8.41 9.59L12 13.17L15.59 9.59L17 11L12 16Z" fill="currentColor"/>
                                <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM12 19C8.14 19 5 15.86 5 12C5 8.14 8.14 5 12 5C15.86 5 19 8.14 19 12C19 15.86 15.86 19 12 19Z" fill="currentColor"/>
                            </svg>
                        </button>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink} aria-label="GitHub">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.57 9.521 21.26 9.521 20.988C9.521 20.741 9.513 20.13 9.508 19.313C6.726 19.907 6.139 18.16 6.139 18.16C5.685 17.082 5.028 16.81 5.028 16.81C4.121 16.225 5.098 16.235 5.098 16.235C6.101 16.299 6.629 17.253 6.629 17.253C7.521 18.719 8.97 18.269 9.54 18.035C9.63 17.495 9.889 17.13 10.175 16.915C7.955 16.665 5.62 15.838 5.62 11.999C5.62 10.755 6.008 9.721 6.649 8.898C6.546 8.633 6.202 7.523 6.747 6.147C6.747 6.147 7.587 5.879 9.496 7.164C10.29 6.949 11.15 6.841 12 6.837C12.85 6.841 13.71 6.949 14.504 7.164C16.413 5.879 17.253 6.147 17.253 6.147C17.798 7.523 17.454 8.633 17.351 8.898C17.992 9.721 18.38 10.755 18.38 11.999C18.38 15.848 16.04 16.661 13.813 16.905C14.172 17.175 14.491 17.703 14.491 18.513C14.491 19.626 14.479 20.51 14.479 20.988C14.479 21.263 14.659 21.577 15.167 21.489C19.135 20.166 22 16.418 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
                                </svg>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/>
                                </svg>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="Twitter">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.162 5.656C21.3989 5.99375 20.589 6.2155 19.76 6.314C20.6336 5.79154 21.288 4.96975 21.6 4C20.7801 4.48816 19.8812 4.83083 18.94 5.014C18.1693 4.18563 17.1114 3.70117 16 3.666C13.9236 3.666 12.2518 5.33782 12.2518 7.414C12.2518 7.682 12.2768 7.944 12.3268 8.198C9.138 8.046 6.25164 6.58 4.25164 4.334C3.94582 4.8555 3.774 5.4535 3.774 6.094C3.774 7.306 4.40182 8.3745 5.384 9.002C4.69073 8.98925 4.02855 8.7785 3.466 8.4V8.456C3.466 10.261 4.83618 11.781 6.636 12.116C6.342 12.196 6.03164 12.238 5.71364 12.238C5.48564 12.238 5.26727 12.216 5.052 12.174C5.49927 13.6695 6.85909 14.766 8.45891 14.794C7.20327 15.8125 5.61145 16.414 3.88 16.414C3.59818 16.414 3.324 16.396 3.052 16.362C4.66909 17.4395 6.56073 18.052 8.57818 18.052C16 18.052 20.1082 12.306 20.1082 7.414C20.1082 7.256 20.1044 7.098 20.0978 6.942C20.912 6.3505 21.6 5.592 22.162 4.728L22.162 5.656Z" fill="currentColor"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;