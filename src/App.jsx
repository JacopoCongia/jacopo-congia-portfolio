import { useInView } from "react-intersection-observer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";

function App() {
  const [aboutRef, aboutInView] = useInView();
  const [projectsRef, projectsInView] = useInView();

  console.log(aboutInView, projectsInView);

  return (
    <div>
      <Home />
      <Navbar
        aboutInView={aboutInView}
        projectsInView={projectsInView}
      />
      <AboutMe aboutRef={aboutRef} />
      <MyProjects projectsRef={projectsRef} />
      <Footer />
    </div>
  );
}

export default App;
