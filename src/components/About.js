import photo from '../imgs/girl.png';

const About = () => {
    return (
      <div class="main-info">
        <div class="personal-photo">
          <img class="photo" src={photo} />
        </div>

        <div class="about-person">
          <h1>Hi, my name is Kelly Teller</h1>
          <p class="description">
            I am a Full Stack Developer, a master of both front-end and back-end
            sorcery. With a passion for innovation, I conjure captivating web
            experiences using HTML, CSS, JavaScript, React, Node.js, and more.
          </p>
          <div class="info-btn">
            <button>See for CV</button>
          </div>
        </div>
      </div>
    );
}

export default About