import { motion } from "motion/react";
import Skills from "./Skills";

function AboutMe({ aboutRef, aboutInView }) {
  return (
    <div className="min-h-[100vh] bg-retro-brown">
      <section
        ref={aboutRef}
        id="about"
        className={`mx-auto flex min-h-[100vh] scroll-mt-[60px] flex-col items-center justify-center gap-[10%] bg-retro-brown px-[3em] pb-[6em] pt-[4em] text-center text-[1.1rem] text-retro-cream`}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ margin: "-100px" }} // Trigger when 100px into view
          className="flex flex-col min-[1200px]:flex-row min-[1200px]:items-start min-[1200px]:justify-center min-[1200px]:gap-[5em] min-[1200px]:px-[10em]"
        >
          <div
            className={`flex flex-col items-center gap-[4em] min-[1400px]:max-w-[35%]`}
          >
            <h1 className="whitespace-nowrap border-l-[0.2em] border-l-retro-yellow pl-[0.5em] font-shrikhand text-[2.4rem] min-[800px]:text-[3.2rem] min-[1200px]:self-start">
              About Me
            </h1>
            <img
              src="/profile_picture_small.png"
              className="mb-[-25px] w-[180px] rounded-[50%] border-[5px] border-retro-yellow"
              alt="profile picture"
            />
            <p className="mb-[3em] leading-[1.9em] min-[800px]:max-w-[66%] min-[1200px]:max-w-[100%] min-[1400px]:max-w-[100%]">
              With a background in{" "}
              <span className="font-semibold text-retro-mint">Photography</span>{" "}
              and{" "}
              <span className="font-semibold text-retro-mint">
                Photo Editing
              </span>
              , I started my coding journey by making simple websites, then I
              moved on to{" "}
              <span className="font-semibold text-retro-pink">JavaScript</span>{" "}
              and{" "}
              <span className="font-semibold text-retro-pink">React.js</span>,
              and it opened my eyes to a whole new world. I love learning about
              new things, and the possibilities in this field are endless.
              Outside of coding, I enjoy inline skating, playing video games,
              taking pictures and another never-ending learning endeavor:
              cooking.
            </p>
          </div>

          <Skills />
        </motion.div>
      </section>
    </div>
  );
}

export default AboutMe;
