import React from "react";
import Resume from "../Images/Michael-Nava-resume.pdf";

const PersonalCard = () => {
  return (
    <div className="card">
      <br />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>Phone</strong>
          <br />
          (256) 274-1771
        </li>
        <li className="list-group-item">
          <strong>Email</strong>
          <br />
          <a href="mailto:M!cha3l.nava@gmail.com">Michael Nava</a>
        </li>
        <li className="list-group-item">
          <strong>Resume</strong>
          <br /> <a href={Resume}>PDF</a>
        </li>
      </ul>
    </div>
  );
};

export default PersonalCard;
