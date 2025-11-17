function Navbar({ homeInView, aboutInView, projectsInView }) {
  return (
    <nav className="sticky h-[60px] select-none justify-center flex min-[700px]:justify-end z-50 top-0 shadow-md backdrop-blur-sm bg-retro-yellow/[95%] px-[1em] font-medium text-[0.9rem] min-[700px]:pr-[2em] min-[700px]:text-[1rem]">
      <ul className="flex text-retro-cream">
        <li
          className={`h-[100%] hover:border-b-[8px] hover:border-b-retro-pink px-[1em] flex items-center hover:bg-retro-cream hover:text-retro-brown hover:pt-[8px] ${
            homeInView &&
            "bg-retro-cream text-retro-brown border-b-[8px] pt-[8px] border-b-retro-pink"
          }`}
        >
          <a href="#home">Home</a>
        </li>
        <li
          className={`h-[100%] hover:border-b-[8px] hover:border-b-retro-pink px-[1em] flex items-center hover:bg-retro-cream hover:text-retro-brown hover:pt-[8px] ${
            aboutInView &&
            "bg-retro-cream text-retro-brown border-b-[8px] pt-[8px] border-b-retro-pink"
          }`}
        >
          <a href="#about">About</a>
        </li>
        <li
          className={`h-[100%] hover:border-b-[8px] hover:border-b-retro-pink px-[1em] flex items-center hover:bg-retro-cream hover:text-retro-brown hover:pt-[8px] ${
            projectsInView &&
            "bg-retro-cream text-retro-brown border-b-[8px] pt-[8px] border-b-retro-pink"
          }`}
        >
          <a href="#myprojects">My Projects</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
