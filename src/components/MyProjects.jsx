function MyProjects({ projectsRef }) {
  const data = [
    {
      name: "Final Fantasy XIV Relic Weapons",
      description:
        "An app to track your Final Fantasy XIV Relic Weapons built in React.js, Tailwindcss and with an account system and database powered by Firebase.",
      image: "/relic-weapons.png",
      gitHub: "https://github.com/JacopoCongia/ffxiv-relic-weapons-2.0",
      liveVersion: "https://finalfantasyxivrelics.netlify.app/"
    },
    {
      name: "moviesearch.",
      description:
        "Search and add your favorite movies to your watchlist. Built in React.js, Tailwindcss and Firebase.",
      image: "/moviesearch.png",
      gitHub: "https://github.com/JacopoCongia/movie-search-and-watchlist",
      liveVersion: "https://moviesearchbyjako.netlify.app/"
    },
    {
      name: "Final Fantasy XIV Blue Mage Spells",
      description:
        "Search and filter all of the Blue Mage spells available in FFXIV and remove the ones you already own. Built in React.js and Tailwindcss.",
      image: "/blue-mage-spells.png",
      gitHub: "https://github.com/JacopoCongia/blue-mage-spells",
      liveVersion: "https://blue-mage-spells.vercel.app/"
    }
  ];

  const projectsEl = data.map((project) => {
    return (
      <article
        key={project.name}
        className="flex flex-col items-center m-auto gap-[2.5em] min-[1200px]:flex-row min-[1200px]:max-w-[100%] min-[1200px]:text-right min-[1200px]:items-start min-[1200px]:gap-[3em]"
      >
        <div className="max-w-[80%]">
          <div className="min-[1200px]:max-w-[100%]">
            <h1 className="font-semibold text-[1.4rem] min-[750px]:text-[1.8rem] pb-[0.5em]">
              {project.name}
            </h1>
            <p className="text-[0.9rem] min-[750px]:text-[1.2rem]">
              {project.description}
            </p>
          </div>
          <div className="flex flex-col gap-[1em] mt-[2em] min-[1200px]:flex-row min-[1200px]:justify-end">
            <a
              href={project.gitHub}
              target="_blank"
              rel="noreferrer"
              className="border px-[1em] py-[0.5em] text-neutral-200 hover:text-orange-500 hover:border-orange-500"
            >
              GitHub
            </a>
            <a
              href={project.liveVersion}
              target="_blank"
              rel="noreferrer"
              className="border px-[1em] py-[0.5em] text-neutral-200 hover:text-orange-500 hover:border-orange-500"
            >
              Live Version
            </a>
          </div>
        </div>
        <img
          src={project.image}
          className="max-w-[80%] min-[1200px]:max-w-[50%]"
        />
      </article>
    );
  });

  return (
    <section
      ref={projectsRef}
      id="myprojects"
      className="pt-[7em] pb-[4em] px-[2em] flex flex-col items-center justify-center gap-[3em] text-[1.1rem] text-center text-neutral-200 bg-[#250E09] min-[1200px]:px-[10em]"
    >
      <h1 className="text-[1.9rem] font-bold min-[800px]:text-[2.5rem] border-l-[0.2em] pl-[0.5em] border-l-orange-500 min-[1200px]:self-start min-[1200px]:mb-[1.5em]">
        My Projects
      </h1>
      <div className="flex flex-col gap-[5em] justify-center">{projectsEl}</div>
    </section>
  );
}

export default MyProjects;
