"use client";

import React, { useState } from "react";
import { FiHome, FiUser, FiLayers, FiCode, FiMail } from "react-icons/fi";
import styles from "./DockApp.module.css";

const navItems = [
  { id: "home", icon: <FiHome size={22} />, label: "Home", href: "#home" },
  { id: "about", icon: <FiUser size={22} />, label: "About", href: "#about" },
  { id: "stack", icon: <FiLayers size={22} />, label: "Stack", href: "#stack" },
  { id: "projects", icon: <FiCode size={22} />, label: "Projects", href: "#projects" },
  { id: "contact", icon: <FiMail size={22} />, label: "Contact", href: "#contact" },
];

const DockApp = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleClick = (id) => {
    setActiveItem(id);
  };

  return (
    <div className={styles.dockWrapper}>
      <nav className={styles.dockContainer}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`${styles.dockItem} ${
              activeItem === item.id ? styles.active : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleClick(item.id);
              // Smooth scroll to section
              document.querySelector(item.href)?.scrollIntoView({
                behavior: "smooth"
              });
            }}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            aria-label={item.label}
          >
            <div className={styles.iconContainer}>
              <div className={`${styles.iconBackground} ${
                hoveredItem === item.id ? styles.hover : ""
              }`}>
                {item.icon}
              </div>
              <span className={styles.tooltip}>{item.label}</span>
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default DockApp;