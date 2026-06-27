import { useTheme } from "../hooks/useTheme";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { motion } from "motion/react";
import styles from "./ThemeToggle.module.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={styles.toggleBtn}
      aria-label="Toggle Dark Mode"
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div
        key={theme}
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        variants={{
          hover: {
            scale: 1.2,
            rotate: theme === "light" ? -15 : 45,
          },
          tap: {
            scale: 0.8,
            rotate: 0,
          },
        }}
        transition={{ type: "spring", stiffness: 350, damping: 12 }}
      >
        {theme === "light" ? <BsMoonFill /> : <BsSunFill />}
      </motion.div>
    </motion.button>
  );
}

export default ThemeToggle;
