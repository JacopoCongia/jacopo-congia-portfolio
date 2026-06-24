import { motion } from "motion/react";
import Skills from "./Skills";
import styles from "./AboutMe.module.css";

function AboutMe({ aboutRef }) {
  return (
    <section
      ref={aboutRef}
      id="about"
      className={styles.section}
      aria-labelledby="about-heading"
    >
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ margin: "-100px" }} // Trigger when 100px into view
        className={styles.contentContainer}
      >
        <div className={styles.textContainer}>
          <h2 id="about-heading" className={styles.heading}>
            About Me
          </h2>
          <img
            src="/profile_picture_small.png"
            className={styles.profileImage}
            alt="Jacopo's profile headshot"
          />
          <p className={styles.paragraph}>
            With a background in{" "}
            <span className={styles.highlightMint}>Photography</span> and{" "}
            <span className={styles.highlightMint}>Photo Editing</span>, I
            started my coding journey by making simple websites, then I moved on
            to <span className={styles.highlightPink}>JavaScript</span> and{" "}
            <span className={styles.highlightPink}>React.js</span>, and it
            opened my eyes to a whole new world. I love learning about new
            things, and the possibilities in this field are endless. Outside of
            coding, I enjoy inline skating, playing video games, taking pictures
            and another never-ending learning endeavor: cooking.
          </p>
        </div>
        <Skills />
      </motion.div>
    </section>
  );
}

export default AboutMe;
