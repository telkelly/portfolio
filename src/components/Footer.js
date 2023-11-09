import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="nav-bar footer">
      <div>
        Call me:
        <br />
        053-537-5577
      </div>
      <div>
        Email:
        <br />
        telltokel@gmail.com
      </div>
      <div className="social-media">
        <a href="https://github.com/telkelly">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/keltel">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
