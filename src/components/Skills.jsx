import { motion } from "motion/react";
import { skills } from "../data/skillIcons.jsx";

function Skills() {
  return (
    <div className="flex flex-col items-center gap-[4em] min-[1200px]:min-w-[50%]">
      <h1 className="border-l-[0.2em] border-l-retro-yellow pl-[0.5em] font-shrikhand text-[2.4rem] min-[800px]:text-[3.2rem] min-[1200px]:self-start">
        Skills
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-[2em] px-[3em] min-[1200px]:grid min-[1200px]:min-w-[50%] min-[1200px]:grid-cols-3 min-[1400px]:grid-cols-4">
        {skills.map((skill) => (
          <motion.div
            whileHover={{ y: -10 }}
            // whileHover={{
            //   rotate: [0, -5, 5, -5, 5, 0],
            //   transition: { duration: 0.3 },
            // }}
            transition={{ type: "spring", stiffness: 300 }}
            key={skill.name}
            className="flex cursor-default flex-col items-center gap-[0.5em]"
          >
            <svg viewBox={skill.viewBox} width={80} height={80}>
              {skill.icon}
            </svg>
            <h1>{skill.name}</h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
