import { motion } from "motion/react";
import { skills } from "../data/skillIcons.jsx";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Skills</h2>
      <ul className={styles.skillList}>
        {skills.map((skill) => (
          <motion.li
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
            key={skill.name}
            className={styles.skillItem}
          >
            <svg
              viewBox={skill.viewBox}
              width={80}
              height={80}
              aria-hidden="true"
            >
              {skill.icon}
            </svg>
            <span>{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
