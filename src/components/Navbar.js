import { FaGithub,FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <header class="nav-bar">
      <div class="logo">Portfolio</div>
      <div class="nav-info">
        <a>Projects</a>
        <a>Resume</a>
        <a>Contact</a>
      </div>
      <div className="social-media">
        <a href="https://github.com/telkelly">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/keltel">
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
};

export default Navbar