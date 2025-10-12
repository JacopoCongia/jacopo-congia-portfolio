import Skills from "./Skills";

function AboutMe({ aboutRef, aboutInView }) {
  return (
    <div className="min-h-[100vh] bg-[#200333]">
      <section
        ref={aboutRef}
        id="about"
        className={`min-h-[100vh] flex flex-col items-center justify-center mx-auto gap-[10%] pt-[100px] pb-[70px] px-[3em] text-[1.1rem] text-center text-neutral-200 bg-[#200333]  duration-[0.3s] opacity-0 ${
          aboutInView && "opacity-100"
        }`}
      >
        <div className="flex flex-col min-[1200px]:flex-row min-[1200px]:items-start min-[1200px]:px-[10em] min-[1200px]:gap-[3em] min-[1200px]:justify-center">
          <div
            className={`flex flex-col items-center gap-[4em] min-[1400px]:max-w-[35%]`}
          >
            <h1 className="text-[1.9rem] font-bold border-l-[0.2em] pl-[0.5em] border-l-orange-500 min-[800px]:text-[2.5rem] min-[1200px]:self-start">
              About Me
            </h1>
            <img
              src="/profile_picture_small.png"
              className="w-[180px] border-[5px] border-orange-500 rounded-[50%] mb-[-25px]"
            />
            <p className="mb-[3em] leading-[1.9em] min-[800px]:max-w-[66%] min-[1200px]:max-w-[100%] min-[1400px]:max-w-[100%]">
              With a background in{" "}
              <span className="font-semibold">Photography</span> and{" "}
              <span className="font-semibold">Photo Editing</span>, I started my
              coding journey by making simple websites, then I moved on to{" "}
              <span className="font-semibold">JavaScript</span> and{" "}
              <span className="font-semibold">React.js</span>, and it opened my
              eyes to a whole new world. I love learning about new things, and
              the possibilities in this field are endless. Outside of coding, I
              enjoy inline skating, playing video games, taking pictures and
              another never-ending learning endeavor: cooking.
            </p>
          </div>

          <Skills />
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
