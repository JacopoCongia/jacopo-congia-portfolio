function Home() {
  return (
    <section
      id="home"
      className="h-[100vh] flex flex-col items-center justify-center"
    >
      <div className="text-[2rem] font-[400] text-neutral-200 max-w-[80%] text-center min-[800px]:text-[4rem]">
        <h1>
          Hello, I&apos;m <span className="text-orange-500">Jacopo</span>.
        </h1>
        <h1 className="mb-[2em]">I&apos;m a Front-end developer.</h1>
        <a
          href="#about"
          className="border text-[1.4rem] py-[0.5em] px-[1.5em] hover:text-orange-500 hover:border-orange-500 min-[800px]:text-[1.8rem]"
        >
          Start Exploring
        </a>
      </div>
    </section>
  );
}

export default Home;
