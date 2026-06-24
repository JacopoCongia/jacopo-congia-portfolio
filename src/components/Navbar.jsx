import { motion } from "motion/react";
import styles from "./Navbar.module.css";

function Navbar({ homeInView, aboutInView, projectsInView }) {
  const navItems = [
    { id: "home", label: "Home", active: homeInView },
    { id: "about", label: "About Me", active: aboutInView },
    { id: "myprojects", label: "My Projects", active: projectsInView },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.id} className={styles.navItem}>
            <a
              href={`#${item.id}`}
              className={`${styles.link} ${item.active ? styles.linkActive : ""}`}
            >
              {item.label}
            </a>

            {/* Sliding background/border indicator */}
            {item.active && (
              <motion.div
                layoutId="activeNav"
                className={styles.activeIndicator}
                initial={false}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
