import { motion } from "motion/react";

function Navbar({ homeInView, aboutInView, projectsInView }) {
  const navItems = [
    { id: "home", label: "Home", active: homeInView },
    { id: "about", label: "About Me", active: aboutInView },
    { id: "myprojects", label: "My Projects", active: projectsInView },
  ];

  return (
    <nav className="sticky top-0 z-50 flex h-[60px] select-none justify-center bg-retro-yellow/[95%] px-[1em] text-[0.9rem] font-medium shadow-md backdrop-blur-sm min-[700px]:justify-end min-[700px]:pr-[2em] min-[700px]:text-[1rem]">
      <ul className="flex text-retro-cream">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="relative flex h-full items-center px-[1em]"
          >
            <a
              href={`#${item.id}`}
              className={`relative z-10 transition-colors duration-300 ${
                item.active ? "text-retro-brown" : "hover:text-retro-brown"
              }`}
            >
              {item.label}
            </a>

            {/* Sliding background/border indicator */}
            {item.active && (
              <motion.div
                layoutId="activeNav"
                className="absolute inset-0 border-b-[8px] border-b-retro-pink bg-retro-cream pt-[8px]"
                initial={false}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
