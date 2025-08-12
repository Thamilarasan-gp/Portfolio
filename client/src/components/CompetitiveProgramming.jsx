import { useState } from 'react';
import styles from './CompetitiveProgramming.module.css';

const platformLinks = [
  {
    href: "https://leetcode.com/thamilarasangp",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    alt: "LeetCode logo",
    title: "LeetCode",
    details: "250+ problems solved",
    rating: "Contest Rating: 1,448"
  },
  {
    href: "https://www.skillrack.com/faces/resume.xhtml?id=484668&key=262cac8aa817e03417f620f487c0e526d5a868cf",
    src: "https://yt3.ggpht.com/a-/AN66SAz5hy2hxiCCoJWb1xjAgJLlkJmGqkwP_hGv4g=s900-mo-c-c0xffffffff-rj-k-no",
    alt: "SkillRack logo",
    title: "SkillRack",
    details: "700+ problems solved",
    rating: "Rank: 44,915"
  },
  {
    href: "https://www.codechef.com/users/thamilarasangp",
    src: "https://cdn.codechef.com/images/cc-logo.svg",
    alt: "CodeChef logo",
    title: "CodeChef",
    details: "85+ problems solved"
  },
  {
    href: "https://www.geeksforgeeks.org/user/thamilarasa73f7/",
    src: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
    alt: "GeeksforGeeks logo",
    title: "GeeksforGeeks",
    details: "50+ problems solved"
  }
];

const CompetitiveProgramming = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseMove = (e, id) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
    setHoveredCard(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Competitive Programming</h2>
        <p className={styles.subtitle}>My coding platform profiles and achievements</p>
      </div>

      <div className={styles.platformsGrid}>
        {platformLinks.map((platform, index) => (
          <a
            key={index}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.platformLink}
          >
            <div
              className={`${styles.platformCard} ${hoveredCard === index ? styles.hovered : ''}`}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.platformLogo}>
                <img src={platform.src} alt={platform.alt} />
              </div>
              <div className={styles.platformInfo}>
                <h3>{platform.title}</h3>
                <p className={styles.details}>{platform.details}</p>
                {platform.rating && <p className={styles.rating}>{platform.rating}</p>}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CompetitiveProgramming;