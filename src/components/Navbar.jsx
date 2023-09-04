function Navbar() {
  return (
    <nav className="sticky top-0 drop-shadow-md bg-[#383838] py-[0.6em] px-[1em] font-medium text-[0.8rem] min-[700px]:pr-[2em] min-[700px]:text-[1rem]">
      <ul className="flex gap-5 text-neutral-200 justify-around min-[700px]:justify-end">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>My Projects</li>
      </ul>
    </nav>
  );
}

export default Navbar;
