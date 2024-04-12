import React from "react";
import "./ButtonSection.css";

const ButtonSection = ({sociallinks}) => {
  console.log (sociallinks)
  return (
    <div className="Contenedor1">
      <div className="container">
        {
          sociallinks.map(
            sociallink => <button key={sociallink.name}> {sociallink.name}</button>
          )
        }
      </div>
    </div>
  );
};

export default ButtonSection;