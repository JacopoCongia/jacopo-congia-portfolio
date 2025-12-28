import { motion } from "motion/react";

function MyProjects({ projectsRef, projectsInView }) {
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
      hidden: { opacity: 0, x: project.reversed ? -50 : 50 },
      visible: { opacity: 1, x: 0 },
    };

    return (
      <motion.article
        key={project.name}
        variants={cardVariants} // Use variants for cleaner stagger logic
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-50px" }}
        transition={{ duration: 0.7, delay: index * 0.2 }} // Stagger delay based on index
        className={`m-auto flex flex-col items-center gap-[2.5em] ${
          !project.reversed
            ? "min-[1200px]:flex-row min-[1200px]:items-start min-[1200px]:text-right"
            : "min-[1200px]:flex-row-reverse min-[1200px]:items-start min-[1200px]:text-left"
        } min-[1200px]:max-w-[100%] min-[1200px]:gap-[3em]`}
      >
        <div className="max-w-[80%]">
          <div className="min-[1200px]:max-w-[100%]">
            <h1 className="pb-[0.5em] text-[1.4rem] font-semibold min-[750px]:text-[1.8rem]">
              {project.name}
            </h1>
            <p className="text-[0.9rem] min-[750px]:text-[1.2rem]">
              {project.description}
            </p>
          </div>
          <div className="mt-[2em] flex flex-col gap-[1em] text-center min-[1200px]:flex-row min-[1200px]:justify-end">
            <a
              href={project.liveVersion}
              target="_blank"
              rel="noreferrer"
              className="font-shadow-sm flex items-center justify-center bg-retro-brown py-[0.6em] font-semibold text-neutral-200 duration-[0.2s] hover:bg-retro-yellow hover:text-retro-brown min-[1200px]:w-[50%]"
            >
              Live Version
            </a>
            <a
              href={project.gitHub}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center border-[2px] border-neutral-800 py-[0.6em] font-semibold text-neutral-800 duration-[0.2s] hover:border-retro-yellow hover:text-retro-yellow min-[1200px]:w-[50%]"
            >
              GitHub
            </a>
          </div>
        </div>

        <img
          src={project.image}
          className="max-w-[80%] min-[1200px]:max-w-[50%]"
        />
      </motion.article>
    );
  });
  return (
    <div className="overflow-x-hidden bg-retro-cream">
      <section
        ref={projectsRef}
        id="myprojects"
        className={`relative flex flex-col items-center justify-center gap-[3em] bg-retro-cream px-[2em] pb-[100px] pt-[100px] text-center text-[1.1rem] text-retro-brown min-[1200px]:px-[10em] min-[1200px]:pt-[150px]`}
      >
        <h1 className="border-l-[0.2em] border-l-retro-yellow pl-[0.5em] font-shrikhand text-[2.4rem] min-[800px]:text-[3.2rem] min-[1200px]:self-start">
          {" "}
          My Projects
        </h1>
        <div className="flex flex-col justify-center gap-[5em]">
          {projectsEl}
        </div>
      </section>
    </div>
  );
}

export default MyProjects;
