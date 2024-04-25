import React from "react";
import UserDetails2 from "./UserDetails2";
import "./Card.css";

const Card2 = (props) => {
  const episode = props.episode2;
  console.log (episode);
  //const sociallinks = user["Social-links"]
  return (
    <div className="contenedorDinamico2">
      <UserDetails2 episode={episode} />
      {/* <ButtonSection sociallinks = {sociallinks}/> */}
    </div>
  );
};

export default Card2;
