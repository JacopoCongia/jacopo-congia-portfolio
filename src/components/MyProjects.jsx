import { motion } from "motion/react";
import styles from "./MyProjects.module.css";

function MyProjects({ projectsRef }) {
  const data = [
    {
      name: "Wedding Website with RSVP",
      description:
        "A wedding website with RSVP functionality built in React.js and Tailwindcss. Data is stored in a database powered by Supabase.",
      image: "/wedding-website.png",
      gitHub: "https://github.com/JacopoCongia/wedding-invitation-public",
      liveVersion: "https://rsvp-wedding-invitation.netlify.app/",
      reversed: true,
    },
    {
      name: "Final Fantasy XIV Relic Weapons",
      description:
        "An app to track your Final Fantasy XIV Relic Weapons built in React.js, Tailwindcss and with an account system and database powered by Firebase.",
      image: "/relic-weapons.png",
      gitHub: "https://github.com/JacopoCongia/ffxiv-relic-weapons-2.0",
      liveVersion: "https://finalfantasyxivrelics.netlify.app/",
      reversed: false,
    },
    {
      name: "moviesearch.",
      description:
        "Search and add your favorite movies to a watchlist. Built in React.js, Tailwindcss and Firebase.",
      image: "/moviesearch.png",
      gitHub: "https://github.com/JacopoCongia/movie-search-and-watchlist",
      liveVersion: "https://moviesearchbyjako.netlify.app/",
      reversed: true,
    },
    {
      name: "Final Fantasy XIV Blue Mage Spells",
      description:
        "Search and filter all of the Blue Mage spells available in FFXIV and remove the ones you already own. Built in React.js and Tailwindcss.",
      image: "/blue-mage-spells.png",
      gitHub: "https://github.com/JacopoCongia/blue-mage-spells",
      liveVersion: "https://blue-mage-spells.vercel.app/",
      reversed: false,
    },
  ];

  const projectsEl = data.map((project, index) => {
    const cardVariants = {
      hidden: { opacity: 0, x: project.reversed ? -15 : 15 },
      visible: { opacity: 1, x: 0 },
    };

    return (
      <motion.article
        key={project.name}
        variants={cardVariants} // Use variants for cleaner stagger logic
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-15px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger delay based on index
        className={`${styles.projectCard} ${
          project.reversed ? styles.cardReversed : styles.cardStandard
        }`}
      >
        <div className={styles.textContent}>
          <div>
            <h3 className={styles.projectTitle}>{project.name}</h3>
            <p className={styles.projectDesc}>{project.description}</p>
          </div>
          <div className={styles.buttonContainer}>
            <a
              href={project.liveVersion}
              target="_blank"
              rel="noreferrer"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Live Version
            </a>
            <a
              href={project.gitHub}
              target="_blank"
              rel="noreferrer"
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              GitHub
            </a>
          </div>
        </div>

        <img
          src={project.image}
          className={styles.projectImage}
          alt={`Screenshot of ${project.name} app`}
        />
      </motion.article>
    );
  });
  return (
    <div className={styles.wrapper}>
      <section ref={projectsRef} id="myprojects" className={styles.section}>
        <h2 className={styles.sectionHeading}> My Projects</h2>
        <div className={styles.projectsContainer}>{projectsEl}</div>
      </section>
    </div>
  );
}

export default MyProjects;
