import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";

function Home({ homeRef }) {
  // A list of passions to cycle through with an animation effect
  const passions = [
    "coding",
    "learning",
    "communicating",
    "animation",
    "teaching",
    "solving problems",
    "designing pretty things",
    "photography",
    "skating",
    "cooking",
  ];

  // State to keep track of the current passion index
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to change the passion every 3 seconds
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % passions.length);
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
          className={styles.subtitleWrapper}
        >
          <span>I&apos;m passionate about</span>{" "}
          <div>
            <AnimatePresence mode="wait">
              <motion.span
                key={index} // The key tells Framer Motion when the text has changed
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{
                  y: {
                    type: "spring",
                    stiffness: 200, // Tighter spring for the quick changing words
                    damping: 10, // Less damping for a snappier exit
                  },
                  opacity: { duration: 0.2 }, // Quick fade in/out
                }}
                className={styles.dynamicText}
              >
                {passions[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
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
