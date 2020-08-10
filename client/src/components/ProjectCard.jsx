import React from "react";

const ProjectCard = ({ href, src, text }) => {
  return (
    <div className="card mt-3 ">
      <a href={href}>
        <img className="card-img-top" src={src} alt={text} />
      </a>
      <br />
      <div className="card-title text-center">
        <h3>
          <a href={href} className="text-dark">
            {text}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default ProjectCard;
