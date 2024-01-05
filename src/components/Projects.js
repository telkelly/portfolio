import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "./data";
import Card from "./Card";

const Projects = () => {
  return (
    <div className="proj-container">
      <div className="projects">
        <div className="title-div">
          <h1 className="title-prj">Latest Projects</h1>
          <button>See all</button>
        </div>
        <div className="list-projects">
          <Card projects={projects} displayCount={3} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
