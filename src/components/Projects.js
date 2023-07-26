import colorGame from "../imgs/color-game.png";
import countryApi from "../imgs/country-api.png";
import rpsGame from "../imgs/rps-game.png";
import tipCalculator from "../imgs/tip-calculator.png";
import checker from "../imgs/checker.png";

const Projects = () => {
  return (
    <>
      <h1 className="title-prj">Projects</h1>
      <div class="list-projects">
        <div class="projects">
          <a href="https://health-project-32ks.onrender.com/about">
            <img src={checker} />
          </a>
          <h3 class="project">Symptoms Checker</h3>
          <hr style={{ width: "80%" }} />
          <p class="project-descrp">
            SymptomChecker is a user-friendly tool that analyzes your symptoms
            and provides potential causes. The user can input your symptoms and
            receive a range of suggestions. Also the user can log in and sign up
            on the site. SymptomChecker is not a substitute for professional
            medical advice.
          </p>
          <div class="info-btn orange">
            <a href="https://health-project-32ks.onrender.com/">
              <button>Look at it</button>
            </a>
          </div>
        </div>
        <div class="projects">
          <a href="https://hackaton-project-six.vercel.app/">
            <img src={colorGame} />
          </a>
          <h3 class="project">Color game</h3>
          <hr style={{ width: "80%" }} />
          <p class="project-descrp">
            The game requires the user to select a slightly different color
            among a set of identical colors. By combining learned technologies,
            developed an engaging game that required users to exercise their
            attention to detail and color perception.
          </p>
          <div class="info-btn orange">
            <a href="https://hackaton-project-six.vercel.app/">
              <button>Look at it</button>
            </a>
          </div>
        </div>
        <div class="projects">
          <a href="https://tip-calculator-app-seven-beta.vercel.app/">
            <img src={tipCalculator} />
          </a>
          <h3 class="project">Tip Calculator</h3>
          <hr style={{ width: "80%" }} />
          <p class="project-descrp">
            The Tip Calculator project is a user-friendly application designed
            to assist individuals in calculating the appropriate tip amount for
            a given menu, considering various factors such as the chosen tip
            percentage and the number of people contributing to the bill.
          </p>
          <div class="info-btn orange">
            <a href="https://tip-calculator-app-seven-beta.vercel.app/">
              <button>Look at it</button>
            </a>
          </div>
        </div>
        <div class="projects">
          <a href="https://rest-countries-api-rosy.vercel.app/">
            <img src={countryApi} />
          </a>
          <h3 class="project">Country API</h3>
          <hr style={{ width: "80%" }} />
          <p class="project-descrp">
            The project is a comprehensive application that empowers users to
            access data about any country worldwide through the use of APIs. By
            utilizing real-time data sources, the project offers users valuable
            insights into various countries, including population figures,
            geographic regions, and capital cities.
          </p>
          <div class="info-btn orange">
            <a href="https://rest-countries-api-rosy.vercel.app/">
              <button>Look at it</button>
            </a>
          </div>
        </div>
        <div class="projects">
          <a href="https://rock-paper-scissors-lizard-spock-game-psi.vercel.app/">
            <img src={rpsGame} />
          </a>
          <h3 class="project">Rock Paper Scissors Game</h3>
          <hr style={{ width: "80%" }} />
          <p class="project-descrp">
            The Rock-Paper-Scissors-Lizard-Spock Game project is a digital
            implementation of the classic Rock-Paper-Scissors game with an
            exciting twist. Inspired by the popular TV show "The Big Bang
            Theory," this extended version adds two additional choices, Lizard
            and Spock, creating a more engaging and strategic gaming experience.
            The project provides users with a fun and interactive way to
            challenge the computer.
          </p>

          <div class="info-btn orange">
            <a href="https://rock-paper-scissors-lizard-spock-game-psi.vercel.app/">
              <button>Look at it</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
