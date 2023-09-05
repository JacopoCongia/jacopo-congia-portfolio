import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";

function App() {
  return (
    <div>
      <Home />
      <Navbar />
      <AboutMe />
      <MyProjects />
      <footer className="bg-[#2c2c2c] text-[0.7rem] font-semibold text-neutral-200 py-[1.5em] text-center">
        JACOPO CONGIA - 2023
      </footer>
    </div>
  );
}

export default App;
