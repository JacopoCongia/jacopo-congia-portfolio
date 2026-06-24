import { motion } from "motion/react";
import styles from "./Home.module.css";

function Home({ homeRef }) {
  return (
    <section ref={homeRef} id="home" className={styles.section}>
      <div className={styles.headerContainer}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I&apos;m <span className={styles.highlight}>Jacopo</span>.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className={styles.subtitle}
        >
          I&apos;m passionate about coding.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <motion.a
            whileHover={{
              y: -5,
              backgroundColor: "var(--retro-yellow)",
              color: "var(--retro-cream)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            href="#about"
            className={styles.linkButton}
          >
            Start Exploring
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
