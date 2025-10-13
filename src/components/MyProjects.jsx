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

  const projectsEl = data.map((project) => {
    if (!project.reversed) {
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
            <div className="flex flex-col gap-[1em] text-center mt-[2em] min-[1200px]:flex-row min-[1200px]:justify-end">
              <a
                href={project.liveVersion}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center py-[0.6em] duration-[0.2s] bg-neutral-800 text-neutral-200 font-semibold font-shadow-sm hover:text-neutral-200 hover:bg-orange-500 min-[1200px]:w-[50%]"
              >
                Live Version
              </a>
              <a
                href={project.gitHub}
                target="_blank"
                rel="noreferrer"
                className="border-[2px] border-neutral-800 text-neutral-800 flex items-center justify-center py-[0.6em] duration-[0.2s] font-semibold hover:text-orange-500 hover:border-orange-500 min-[1200px]:w-[50%]"
              >
                GitHub
              </a>
            </div>
          </div>

          <img
            src={project.image}
            className="max-w-[80%] min-[1200px]:max-w-[50%]"
          />
        </article>
      );
    } else {
      return (
        <article
          key={project.name}
          className="flex flex-col items-center m-auto gap-[2.5em] min-[1200px]:flex-row-reverse min-[1200px]:max-w-[100%] min-[1200px]:text-left min-[1200px]:items-start min-[1200px]:gap-[3em]"
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
            <div className="flex flex-col gap-[1em] text-center mt-[2em] min-[1200px]:flex-row min-[1200px]:justify-start">
              <a
                href={project.liveVersion}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center py-[0.6em] duration-[0.2s] bg-neutral-800 text-neutral-200 font-semibold font-shadow-sm hover:text-neutral-200 hover:bg-orange-500 min-[1200px]:w-[50%]"
              >
                Live Version
              </a>
              <a
                href={project.gitHub}
                target="_blank"
                rel="noreferrer"
                className="border-[2px] border-neutral-800 text-neutral-800 flex items-center justify-center py-[0.6em] duration-[0.2s] text-neutral-200 font-semibold hover:text-orange-500 hover:border-orange-500 min-[1200px]:w-[50%]"
              >
                GitHub
              </a>
            </div>
          </div>
          <img
            src={project.image}
            className="max-w-[80%] min-[1200px]:max-w-[50%]"
          />
        </article>
      );
    }
  });

  return (
    <div className="bg-neutral-200">
      <section
        ref={projectsRef}
        id="myprojects"
        className={`relative pt-[100px] pb-[100px] bg-neutral-200 text-neutral-800 px-[2em] flex flex-col items-center justify-center gap-[3em] text-[1.1rem] text-center text-neutral-200 min-[1200px]:px-[10em] min-[1200px]:pt-[150px] duration-[0.3s] opacity-0 ${
          projectsInView && "opacity-100"
        }`}
      >
        <h1 className="text-[1.9rem] font-bold min-[800px]:text-[2.5rem] border-l-[0.2em] pl-[0.5em] border-l-orange-500 min-[1200px]:self-start min-[1200px]:mb-[1.5em]">
          My Projects
        </h1>
        <div className="flex flex-col gap-[5em] justify-center">
          {projectsEl}
        </div>
      </section>
    </div>
  );
}

export default MyProjects;
