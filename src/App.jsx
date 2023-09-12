import { useInView } from "react-intersection-observer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";

function App() {
  const [homeRef, homeInView] = useInView({ rootMargin: "-50% 0px" });
  const [aboutRef, aboutInView] = useInView({ rootMargin: "-50% 0px" });
  const [projectsRef, projectsInView] = useInView({ rootMargin: "-50% 0px" });

  return (
    <div>
      <Navbar
        homeInView={homeInView}
        aboutInView={aboutInView}
        projectsInView={projectsInView}
      />
      <Home homeRef={homeRef} />
      <AboutMe
        aboutRef={aboutRef}
        aboutInView={aboutInView}
      />
      <MyProjects
        projectsRef={projectsRef}
        projectsInView={projectsInView}
      />
      <Footer />
    </div>
  );
}

export default App;
