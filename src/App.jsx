import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div>
      <section
        id="home"
        className="h-[100vh] flex flex-col items-center justify-center"
      >
        <div className="text-[2rem] font-[400] text-neutral-200 max-w-[80%] text-center min-[800px]:text-[4rem]">
          <h1>
            Hello, I&apos;m <span className="text-orange-500">Jacopo</span>.
          </h1>
          <h1 className="mb-[1em]">I&apos;m a Front-end developer.</h1>
          <a
            href="#about"
            className="text-[1.2rem]"
          >
            Start Exploring
          </a>
        </div>
      </section>
      <Navbar />
      <AboutMe />
      <footer className="bg-[#383838] text-[0.7rem] font-semibold text-neutral-200 p-[1em] text-center">
        JACOPO CONGIA - 2023
      </footer>
    </div>
  );
}

export default App;
