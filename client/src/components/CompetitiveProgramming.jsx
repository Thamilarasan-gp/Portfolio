import { useState } from 'react';
import styles from './CompetitiveProgramming.module.css';

// You can replace these URLs with your own images or local assets
const platformImages = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    alt: "LeetCode logo"
  },
  {
    src: "https://yt3.ggpht.com/a-/AN66SAz5hy2hxiCCoJWb1xjAgJLlkJmGqkwP_hGv4g=s900-mo-c-c0xffffffff-rj-k-no",
    alt: "SkillRack logo"
  },
  {
    src: "https://cdn.codechef.com/images/cc-logo.svg",
    alt: "CodeChef logo"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    alt: "HackerRank logo"
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

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.heading}>Competitive Skills</h2>
        <div className={styles.headingUnderline}></div>
      </div>
      <div className={styles.platformsGrid}>
        {/* LeetCode */}
        <div 
          className={`${styles.platformCard} ${hoveredCard === 1 ? styles.hovered : ''}`}
          onMouseMove={(e) => handleMouseMove(e, 1)}
          onMouseLeave={handleMouseLeave}
        >
          <img className={styles.platformImage} src={platformImages[0].src} alt={platformImages[0].alt} />
          <h3>LeetCode</h3>
          <p>200+ problems solved</p>
          <p className={styles.rating}>Contest Rating: 1,608</p>
        </div>

        {/* SkillRack */}
        <div 
          className={`${styles.platformCard} ${hoveredCard === 2 ? styles.hovered : ''}`}
          onMouseMove={(e) => handleMouseMove(e, 2)}
          onMouseLeave={handleMouseLeave}
        >
          <img className={styles.platformImage} src={platformImages[1].src} alt={platformImages[1].alt} />
          <h3>SkillRack</h3>
          <p>950+ problems solved</p>
          <p className={styles.rank}>Rank: 23,915</p>
        </div>

        {/* CodeChef */}
        <div 
          className={`${styles.platformCard} ${hoveredCard === 3 ? styles.hovered : ''}`}
          onMouseMove={(e) => handleMouseMove(e, 3)}
          onMouseLeave={handleMouseLeave}
        >
          <img className={styles.platformImage} src={platformImages[2].src} alt={platformImages[2].alt} />
          <h3>CodeChef</h3>
          <p>85+ problems solved</p>
        </div>

        {/* HackerRank */}
        <div 
          className={`${styles.platformCard} ${hoveredCard === 4 ? styles.hovered : ''}`}
          onMouseMove={(e) => handleMouseMove(e, 4)}
          onMouseLeave={handleMouseLeave}
        >
          <img className={styles.platformImage} src={platformImages[3].src} alt={platformImages[3].alt} />
          <h3>HackerRank</h3>
          <div className={styles.badges}>
            <span>Java 5★</span>
            <span>C++ 3★</span>
            <span>Python 3★</span>
            <span>C</span>
            <span>SQL</span>
          </div>
          <p>Hackos: 502</p>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveProgramming;