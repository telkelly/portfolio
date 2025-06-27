import {FaGithub, FaLinkedin} from "react-icons/fa";
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo">Portfolio</div>
            <div className="nav-content">
                <Link to="/projects">Projects</Link>
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