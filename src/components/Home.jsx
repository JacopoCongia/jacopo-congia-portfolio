import { motion } from "motion/react";

function Home({ homeRef }) {
  return (
    <section
      ref={homeRef}
      id="home"
      className="mt-[-60px] flex min-h-[100vh] select-none flex-col items-center justify-center bg-retro-cream pt-[60px] text-retro-brown"
    >
      <div className="max-w-[80%] text-center text-[2rem] font-[400] tracking-wide min-[800px]:text-[3.5rem]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I&apos;m{" "}
          <span className="font-[500] text-retro-pink">Jacopo</span>.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-[1.5em]"
        >
          I&apos;m passionate about coding.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <motion.a
            whileHover={{
              y: -5,
              backgroundColor: "#EAC435",
              color: "#F2E9DC",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            href="#about"
            className="inline-block bg-retro-pink px-[1.5em] py-[0.5em] text-[1.4rem] text-retro-cream min-[800px]:text-[1.8rem]"
          >
            Start Exploring
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
