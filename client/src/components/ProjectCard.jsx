import React from "react";
import Project1 from "../Images/screenshot-project-1.png";

const ProjectCard = (props) => {
  return (
    <div className="card mt-3 ">
      <a href={props.href}>
        <img className="card-img-top" src={props.src} alt={props.alt} />
      </a>
      <br />
      <div className="card-title text-center">
        <h3>
          <a href={props.href} className="text-dark">
            {props.text}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;
