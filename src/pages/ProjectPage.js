import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectPage() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="projectLinks">
        <div className="githubLink">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="githubIcon" />
          </a>
          <span>GitHub</span>
        </div>
        {project.deployedLink && (
          <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
            <button>View Project</button>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectPage;
