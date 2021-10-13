import React from "react";
import ProjectCard from "../projectCard/ProjectCard";
import { PROJECTS_ARRAY } from "../../utils/constants";

function Projects() {
  return (
    <ul className="projects">
      {PROJECTS_ARRAY.map((card) => (
        <ProjectCard key={card._id} card={card} />
      ))}
    </ul>
  );
}

export default Projects;
