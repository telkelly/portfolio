import colorGame from "../imgs/color-game.png";
import countryApi from "../imgs/country-api.png";
import rpsGame from "../imgs/rps-game.png";
import tipCalculator from "../imgs/tip-calculator.png";
import checker from "../imgs/checker.png";
import meetthere from "../imgs/meet-there.png";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

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
    <>
      <h1 className="title-prj">Projects</h1>
      <div className="list-projects">
        {projects.map((project) => (
          <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ ease: "easeOut", duration: 2 }}
            key={project.id}
            id={project.id}
            onClick={() =>
              setSelectedId(selectedId === project.id ? null : project.id)
            }
            className="projects"
          >
            <motion.h2>{project.title}</motion.h2>
            <motion.img src={project.imgSrc} alt={project.title} />
            <AnimatePresence>
              {selectedId === project.id && (
                <motion.div
                  layout
                  className="detail-section"
                >
                  <p>{project.subtitle}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Projects;
