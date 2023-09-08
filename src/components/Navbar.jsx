function Navbar({ homeInView, aboutInView, projectsInView }) {
  return (
    <nav
      className="sticky z-50 top-0 drop-shadow-md backdrop-blur-md

    bg-[#2c2c2c]/[90%] py-[1.1em] px-[1em] font-medium text-[0.9rem] min-[700px]:pr-[2em] min-[700px]:text-[1rem]"
    >
      <ul className="flex gap-[2.5em] text-neutral-200 justify-center min-[700px]:justify-end">
        <li>
          <a
            href="#home"
            className={`hover:text-orange-500 ${
              homeInView && "text-orange-500"
            }`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`hover:text-orange-500 ${
              aboutInView && "text-orange-500"
            }`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#myprojects"
            className={`hover:text-orange-500 ${
              projectsInView && "text-orange-500"
            }`}
          >
            My Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
