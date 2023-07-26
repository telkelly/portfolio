import colorGame from '../imgs/color-game.png';
import countryApi from "../imgs/country-api.png";
import rpsGame from "../imgs/rps-game.png";
import tipCalculator from '../imgs/tip-calculator.png';
import checker from "../imgs/checker.png";


const Projects = () => {
  return (
    <div class="list-projects">
      <div class="projects">
        <h3 class="project">Color game</h3>
        <a>
          <img src={colorGame} />
        </a>
        <p class="project-descrp">
          The game requires the user to select a slightly different color among
          a set of identical colors. By combining learned technologies,
          developed an engaging game that required users to exercise their
          attention to detail and color perception.
        </p>
      </div>
      <div class="projects">
        <h3 class="project">Tip Calculator</h3>
        <a>
          <img src={tipCalculator} />
        </a>
        <p class="project-descrp">
          The Tip Calculator project is a user-friendly application designed to
          assist individuals in calculating the appropriate tip amount for a
          given menu, considering various factors such as the chosen tip
          percentage and the number of people contributing to the bill.
        </p>
      </div>
      <div class="projects">
        <h3 class="project">Country API</h3>
        <a>
          <img src={countryApi} />
        </a>
        <p class="project-descrp">
          The project is a comprehensive application that empowers users to
          access data about any country worldwide through the use of APIs. By
          utilizing real-time data sources, the project offers users valuable
          insights into various countries, including population figures,
          geographic regions, and capital cities.
        </p>
      </div>
      <div class="projects">
        <h3 class="project">Rock Paper Scissors Game</h3>
        <a>
          <img src={rpsGame} />
        </a>
        <p class="project-descrp">
          The Rock-Paper-Scissors-Lizard-Spock Game project is a digital
          implementation of the classic Rock-Paper-Scissors game with an
          exciting twist. Inspired by the popular TV show "The Big Bang Theory,"
          this extended version adds two additional choices, Lizard and Spock,
          creating a more engaging and strategic gaming experience. The project
          provides users with a fun and interactive way to challenge the
          computer or play against friends, showcasing their decision-making
          skills and luck in this iconic hand game.
        </p>
      </div>
      <div class="projects">
        <h3 class="project">Symptoms Checker</h3>
        <a href="https://health-project-32ks.onrender.com/about">
          <img src={checker} />
        </a>
        <p class="project-descrp">
          The Rock-Paper-Scissors-Lizard-Spock Game project is a digital
          implementation of the classic Rock-Paper-Scissors game with an
          exciting twist. Inspired by the popular TV show "The Big Bang Theory,"
          this extended version adds two additional choices, Lizard and Spock,
          creating a more engaging and strategic gaming experience. The project
          provides users with a fun and interactive way to challenge the
          computer or play against friends, showcasing their decision-making
          skills and luck in this iconic hand game.
        </p>
      </div>
    </div>
  );
};

export default Projects