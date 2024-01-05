import { FaGithub, FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">Portfolio</div>
      <div className="nav-content">
        <a href="#project">Projects</a>
        <a href="#footer">Contact</a>
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