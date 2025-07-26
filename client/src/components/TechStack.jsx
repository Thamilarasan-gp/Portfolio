import React from "react";
import styles from "./TechStack.module.css";

const techGroups = [
  {
    title: "Languages",
    items: [
      { name: "C++", logo: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
      { name: "C", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" },
      { name: "Java", logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
      { name: "Python", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
      { name: "JavaScript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" }
    ]
  },
  {
    title: "Web & Tools",
    items: [
      { name: "React", logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
      { name: "Node.js", logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
      { name: "Express", logo: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" },
      { name: "ReactNative", logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" }
    ]
  },
  {
    title: "Data & Concepts",
    sections: [
      {
        title: "Databases",
        items: [
          { name: "MongoDB", logo: "https://cdn.iconscout.com/icon/free/png-512/mongodb-5-1175140.png" },
          { name: "MySQL", logo: "https://cdn-icons-png.flaticon.com/512/919/919836.png" }
        ]
      },
      {
        title: "Concepts",
        items: [
          { name: "OOP", logo: "https://cdn-icons-png.flaticon.com/512/6132/6132221.png" },
          { name: "DSA", logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" }
        ]
      },
      {
        title: "Tools",
        items: [
          { name: "GitHub", logo: "https://pngimg.com/uploads/github/github_PNG40.png" },
          { name: "Figma", logo: "https://logodownload.org/wp-content/uploads/2022/12/figma-logo-0-1536x1536.png" },
          { name: "Docker", logo: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" }
        ]
      }
    ]
  }
];

const TechStack = () => (
  <div id="stack" className={styles.container}>
    <h2 className={styles.title}>Tech Stack</h2>
    <div className={styles.techGroups}>
      {techGroups.map((group, groupIndex) => (
        <div
          className={`${styles.techGroup} ${
            group.sections ? styles.wideGroup : ""
          }`}
          key={groupIndex}
        >
          <h3 className={styles.groupTitle}>{group.title}</h3>
          {group.items ? (
            <div className={styles.techItems}>
              {group.items.map((tech, techIndex) => (
                <div className={styles.techItem} key={techIndex}>
                  <div className={styles.iconWrapper}>
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className={styles.techIcon}
                      onError={e => {
                        e.target.src = "https://via.placeholder.com/50";
                      }}
                    />
                  </div>
                  <span className={styles.techName}>{tech.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.combinedSections}>
              {group.sections.map((section, sectionIndex) => (
                <div className={styles.section} key={sectionIndex}>
                  <h4 className={styles.sectionTitle}>{section.title}</h4>
                  <div className={styles.techItems}>
                    {section.items.map((tech, techIndex) => (
                      <div className={styles.techItem} key={techIndex}>
                        <div className={styles.iconWrapper}>
                          <img
                            src={tech.logo}
                            alt={tech.name}
                            className={styles.techIcon}
                            onError={e => {
                              e.target.src = "https://via.placeholder.com/50";
                            }}
                          />
                        </div>
                        <span className={styles.techName}>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default TechStack;