function Navbar() {
  return (
    <nav className="sticky top-0 drop-shadow-md bg-[#2c2c2c] py-[0.8em] px-[1em] font-medium text-[0.8rem] min-[700px]:pr-[2em] min-[700px]:text-[1rem]">
      <ul className="flex gap-[2.5em] text-neutral-200 justify-center min-[700px]:justify-end">
        <li>
          <a
            href="#home"
            className="hover:text-orange-500"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:text-orange-500"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#myprojects"
            className="hover:text-orange-500"
          >
            My Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
