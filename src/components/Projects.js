import colorGame from "../imgs/color-game.png";
import countryApi from "../imgs/country-api.png";
import rpsGame from "../imgs/rps-game.png";
import tipCalculator from "../imgs/tip-calculator.png";
import checker from "../imgs/checker.png";
import meetthere from "../imgs/meet-there.png";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null)

  const projects = [
    {
      id: "meet-there",
      title: "Meet There",
      subtitle: "Online platform for event enthusiasts and organizers.",
      imgSrc: meetthere,
      link: "https://meet-there-site.onrender.com/",
    },
    {
      id: "symptoms-checker",
      title: "Symptoms Checker",
      subtitle: "Analyzes symptoms and provides potential causes.",
      imgSrc: checker,
      link: "https://health-project-32ks.onrender.com/",
    },
    {
      id: "color-game",
      title: "Color Game",
      subtitle:
        "Engaging game to exercise attention to detail and color perception.",
      imgSrc: colorGame,
      link: "https://hackaton-project-six.vercel.app/",
    },
    {
      id: "tip-calculator",
      title: "Tip Calculator",
      subtitle: "Helps calculate the appropriate tip amount for a given menu.",
      imgSrc: tipCalculator,
      link: "https://tip-calculator-app-seven-beta.vercel.app/",
    },
    {
      id: "country-api",
      title: "Country API",
      subtitle: "Empowers users to access data about any country through APIs.",
      imgSrc: countryApi,
      link: "https://rest-countries-api-rosy.vercel.app/",
    },
    {
      id: "rps-game",
      title: "Rock Paper Scissors Game",
      subtitle:
        "Digital implementation of the classic game with an exciting twist.",
      imgSrc: rpsGame,
      link: "https://rock-paper-scissors-lizard-spock-game-psi.vercel.app/",
    },
  ];

  return (
    // <>
    //   {/* <h1 className="title-prj">Projects</h1>
    //   <div id="project" class="list-projects">
    //     <div class="projects">
    //       <a href="https://meet-there-site.onrender.com/">
    //         <img src={meetthere} />
    //       </a>
    //       <h3 class="project">Meet there</h3>
    //       <hr style={{ width: "80%" }} />
    //       <p class="project-descrp">
    //         Online platform where event enthusiasts and organizers come
    //         together. It's a space to discover, share, and engage with a variety
    //         of events. Developed using the powerful Django framework and backed
    //         by PostgreSQL.
    //       </p>
    //       <div class="info-btn orange">
    //         <a href="https://meet-there-site.onrender.com/">
    //           <button>Look at it</button>
    //         </a>
    //       </div>
    //     </div>
    //     <div class="projects">
    //       <a href="https://health-project-32ks.onrender.com/about">
    //         <img src={checker} />
    //       </a>
    //       <h3 class="project">Symptoms Checker</h3>
    //       <hr style={{ width: "80%" }} />
    //       <p class="project-descrp">
    //         SymptomChecker is a user-friendly tool that analyzes your symptoms
    //         and provides potential causes. The user can input your symptoms and
    //         receive a range of suggestions. Also the user can log in and sign up
    //         on the site. SymptomChecker is not a substitute for professional
    //         medical advice.
    //       </p>
    //       <div class="info-btn orange">
    //         <a href="https://health-project-32ks.onrender.com/">
    //           <button>Look at it</button>
    //         </a>
    //       </div>
    //     </div>
    //     <div class="projects">
    //       <a href="https://hackaton-project-six.vercel.app/">
    //         <img src={colorGame} />
    //       </a>
    //       <h3 class="project">Color game</h3>
    //       <hr style={{ width: "80%" }} />
    //       <p class="project-descrp">
    //         The game requires the user to select a slightly different color
    //         among a set of identical colors. By combining learned technologies,
    //         developed an engaging game that required users to exercise their
    //         attention to detail and color perception.
    //       </p>
    //       <div class="info-btn orange">
    //         <a href="https://hackaton-project-six.vercel.app/">
    //           <button>Look at it</button>
    //         </a>
    //       </div>
    //     </div>
    //     <div class="projects">
    //       <a href="https://tip-calculator-app-seven-beta.vercel.app/">
    //         <img src={tipCalculator} />
    //       </a>
    //       <h3 class="project">Tip Calculator</h3>
    //       <hr style={{ width: "80%" }} />
    //       <p class="project-descrp">
    //         The Tip Calculator project is a user-friendly application designed
    //         to assist individuals in calculating the appropriate tip amount for
    //         a given menu, considering various factors such as the chosen tip
    //         percentage and the number of people contributing to the bill.
    //       </p>
    //       <div class="info-btn orange">
    //         <a href="https://tip-calculator-app-seven-beta.vercel.app/">
    //           <button>Look at it</button>
    //         </a>
    //       </div>
    //     </div>
    //     <div class="projects">
    //       <a href="https://rest-countries-api-rosy.vercel.app/">
    //         <img src={countryApi} />
    //       </a>
    //       <h3 class="project">Country API</h3>
    //       <hr style={{ width: "80%" }} />
    //       <p class="project-descrp">
    //         The project is a comprehensive application that empowers users to
    //         access data about any country worldwide through the use of APIs. By
    //         utilizing real-time data sources, the project offers users valuable
    //         insights into various countries, including population figures,
    //         geographic regions, and capital cities.
    //       </p>
    //       <div class="info-btn orange">
    //         <a href="https://rest-countries-api-rosy.vercel.app/">
    //           <button>Look at it</button>
    //         </a>
    //       </div>
    //     </div>
    //     <div class="projects">
    //       <a href="https://rock-paper-scissors-lizard-spock-game-psi.vercel.app/">
    //         <img src={rpsGame} />
    //       </a>
    //       <h3 class="project">Rock Paper Scissors Game</h3>
    //       <hr style={{ width: "80%" }} />
    //       <p class="project-descrp">
    //         The Rock-Paper-Scissors-Lizard-Spock Game project is a digital
    //         implementation of the classic Rock-Paper-Scissors game with an
    //         exciting twist. Inspired by the popular TV show "The Big Bang
    //         Theory," this extended version adds two additional choices, Lizard
    //         and Spock, creating a more engaging and strategic gaming experience.
    //         The project provides users with a fun and interactive way to
    //         challenge the computer.
    //       </p>

    //       <div class="info-btn orange">
    //         <a href="https://rock-paper-scissors-lizard-spock-game-psi.vercel.app/">
    //           <button>Look at it</button>
    //         </a>
    //       </div>
    //     </div>
    //   </div> */}
    // </>
    <div>
      <h1 className="title-prj">Projects</h1>
      <div id="project" className="list-projects">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={project.id}
            onClick={() => setSelectedId(project.id)}
            className="projects"
          >
            <motion.div
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
            >
              <motion.h5>{project.subtitle}</motion.h5>
              <motion.h2>{project.title}</motion.h2>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
                <motion.div layoutId={selectedId}>
                  <motion.h5>{projects.subtitle}</motion.h5>
                  <motion.h2>{projects.title}</motion.h2>
                  <motion.button onClick={() => setSelectedId(null)} />
                </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
