function Navbar({ homeInView, aboutInView, projectsInView }) {
  return (
    <nav className="sticky h-[60px] select-none justify-center flex min-[700px]:justify-end z-50 top-0 shadow-md backdrop-blur-sm bg-orange-500/[85%] px-[1em] font-medium text-[0.9rem] min-[700px]:pr-[2em] min-[700px]:text-[1rem]">
      <ul className="flex text-neutral-200">
        <li
          className={`h-[100%] hover:border-b-[8px] hover:border-b-orange-600 px-[1em] flex items-center hover:bg-neutral-200 hover:text-orange-500 hover:pt-[8px] ${
            homeInView &&
            "bg-neutral-200 text-orange-500 border-b-[8px] pt-[8px] border-b-orange-600"
          }`}
        >
          <a href="#home">Home</a>
        </li>
        <li
          className={`h-[100%] hover:border-b-[8px] hover:border-b-orange-600 px-[1em] flex items-center hover:bg-neutral-200 hover:text-orange-500 hover:pt-[8px] ${
            aboutInView &&
            "bg-neutral-200 text-orange-500 border-b-[8px] pt-[8px] border-b-orange-600"
          }`}
        >
          <a href="#about">About</a>
        </li>
        <li
          className={`h-[100%] hover:border-b-[8px] hover:border-b-orange-600 px-[1em] flex items-center hover:bg-neutral-200 hover:text-orange-500 hover:pt-[8px] ${
            projectsInView &&
            "bg-neutral-200 text-orange-500 border-b-[8px] pt-[8px] border-b-orange-600"
          }`}
        >
          <a href="#myprojects">My Projects</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
