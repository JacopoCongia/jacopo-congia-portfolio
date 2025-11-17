function Home({ homeRef }) {
  return (
    <section
      ref={homeRef}
      id="home"
      className="min-h-[100vh] pt-[60px] mt-[-60px] bg-retro-cream text-retro-brown select-none flex flex-col items-center justify-center"
    >
      <div className="text-[2rem] tracking-wide font-[400] max-w-[80%] text-center min-[800px]:text-[3.5rem]">
        <h1>
          Hi, I&apos;m{" "}
          <span className="text-retro-pink font-[500]">Jacopo</span>.
        </h1>
        <h1 className="mb-[1.5em]">I&apos;m passionate about coding.</h1>
        <a
          href="#about"
          className="bg-retro-pink text-retro-cream text-[1.4rem] py-[0.5em] px-[1.5em] duration-[0.2s] hover:text-retro-cream hover:bg-retro-yellow min-[800px]:text-[1.8rem]"
        >
          Start Exploring
        </a>
      </div>
    </section>
  );
}

export default Home;
