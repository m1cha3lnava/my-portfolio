import React from "react";

const ContactCard = ({ href, text, imageLink }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={imageLink} alt={text} />
      <div className="card-body">
        <h5 className="card-title text-center">
          <a href={href} className="card-link">
            {text}
          </a>
        </h5>
      </div>
    </div>
  );
};

export default ContactCard;
