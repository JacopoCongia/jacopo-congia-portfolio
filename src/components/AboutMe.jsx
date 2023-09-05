import Skills from "./Skills";

function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-[100vh] flex flex-col items-center justify-center mx-auto gap-[3em] py-[5em] px-[2em] text-[1.1rem] text-center text-neutral-200 bg-[#200333] min-[1200px]:flex-row min-[1200px]:items-center min-[1200px]:px-[10em]"
    >
      <div className="flex flex-col items-center gap-[3em]">
        <h1 className="text-[1.9rem] font-bold border-l-[0.2em] pl-[0.5em] border-l-orange-500 min-[800px]:text-[2.5rem] min-[1200px]:self-start">
          About Me
        </h1>
        <img className="p-[3em] bg-orange-300 rounded-[50%]" />
        <h1 className="mb-[1.5em] min-[800px]:max-w-[66%] min-[1200px]:max-w-[100%] min-[1400px]:max-w-[80%]">
          With a background in{" "}
          <span className="font-semibold">Photography</span> and{" "}
          <span className="font-semibold">Photo Editing</span>, I started my
          coding journey by making simple websites, then I moved on to{" "}
          <span className="font-semibold">JavaScript</span> and{" "}
          <span className="font-semibold">React.js</span>, and it opened my eyes
          to a whole new world. I love learning about new things, and the
          possibilities in this field are endless. Outside of coding, I enjoy
          powerlifting, playing video games and another never-ending learning
          endeavor: cooking.
        </h1>
      </div>
      <Skills />
    </section>
  );
}

export default AboutMe;
