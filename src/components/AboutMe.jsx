function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-[100vh] flex flex-col items-center mx-auto gap-[2em] py-[4em] px-[2em] text-[1.1rem] text-center text-neutral-200 min-[800px]:max-w-[66%] min-[1200px]:max-w-[40%]"
    >
      <h1 className="text-[1.9rem] font-bold min-[800px]:text-[2.5rem]">
        About Me
      </h1>
      <img className="p-[3em] bg-orange-300 rounded-[50%]" />
      <h1>
        With a background in <span className="font-semibold">Photography</span>{" "}
        and <span className="font-semibold">Photo Editing</span>, I started my
        coding journey by making simple websites, then I moved on to{" "}
        <span className="font-semibold">JavaScript</span> and{" "}
        <span className="font-semibold">React.js</span>, and it opened my eyes
        to a whole new world. I love learning about new things, and the
        possibilities in this field are endless. Outside of coding, I enjoy
        powerlifting, playing video games and another never-ending learning
        path: cooking.
      </h1>
    </section>
  );
}

export default AboutMe;
