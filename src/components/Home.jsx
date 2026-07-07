import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ReactFitty } from "react-fitty";
import Section from "./Section";
import Button from "./Button";
import styles from "./Home.module.css";

function Home({ homeRef }) {
  // A list of passions to cycle through with an animation effect
  const passions = [
    "coding",
    "learning",
    "communicating",
    "animation",
    "running",
    "solving\nproblems",
    "photography",
    "designing\npretty things",
    "skating",
    "teaching",
    "cooking",
    "automating\nthe boring\nstuff",
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
  }, [passions.length]);

  return (
    <Section ref={homeRef} id="home">
      <div className={styles.headingWrapper}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className={styles.title}
        >
          <ReactFitty maxSize={120}>
            Hi, I&apos;m <span className={styles.highlight}>Jacopo</span>.
          </ReactFitty>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
          className={styles.subtitleWrapper}
        >
          <ReactFitty maxSize={120}>I&apos;m passionate about...</ReactFitty>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeIn" }}
          className={styles.dynamicStage}
        >
          <AnimatePresence mode="wait">
            <motion.div
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
                opacity: { duration: 0.3 }, // Quick fade in/out
              }}
              className={styles.dynamicText}
            >
              {/* Split the phrase by '\n' and wrap each line separately! */}
              {passions[index].split("\n").map((line, i) => (
                <div key={i} className={styles.dynamicLine}>
                  <ReactFitty maxSize={120} minSize={20}>
                    {line}
                  </ReactFitty>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: "easeIn" }}
        >
          <Button href="#about" variant="home">
            Start Exploring
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}

export default Home;
