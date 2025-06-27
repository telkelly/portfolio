import React from "react";
import { projects } from "./data";
import CardList from "./CardList";

const Projects = () => {
  return (
      <div className="proj-container">
        <div className="projects">
          <div className="title-div">
            <h1 className="title-prj">Latest Projects</h1>
            <a href="/projects">See all</a>
          </div>
          <CardList projects={projects} displayCount={2}/>
        </div>
      </div>
  );
};

export default Projects;
