import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "./data";
import Card from "./Card";

const Projects = () => {
  return (
    <>
      <h1 className="title-prj">Projects</h1>
      <div className="list-projects">
        <Card projects={projects} />
      </div>
    </>
  );
};

export default Projects;
