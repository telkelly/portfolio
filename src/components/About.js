import photo from '../imgs/girl.png';
import Projects from './Projects';

const About = () => {
    return (
      <div id="main-content" className="main-content">
        <div className="personal-photo">
          <img className="photo" src={photo} />
        </div>

        <div className="about-person">
          <h1>Hi, my name is Kelly Teller</h1>
          <p className="description">
            I am a Full Stack Developer, a master of both front-end and back-end
            sorcery. With a passion for innovation, I conjure captivating web
            experiences using HTML, CSS, JavaScript, React, Node.js, and more.
          </p>
          <div className="info-btn">
            <a href="https://docs.google.com/document/d/1iroLN5P1g6-PE3xgp3cOt4Lvc24uvZ6AXupm3RgbuXk/edit?usp=sharing">
              <button>See for CV</button>
            </a>
          </div>
        </div>
      </div>
    );
}

export default About