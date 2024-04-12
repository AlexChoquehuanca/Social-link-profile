import React from "react";
import UserDetails from "./UserDetails";
import ButtonSection from "./ButtonSection";
import "./Card.css";

const Card = (props) => {
  const user = props.user;
  //console.log (user);
  const sociallinks = user["Social-links"]
  return (
    <div className="contenedorDinamico">
      <UserDetails user={user} />
      <ButtonSection sociallinks = {sociallinks}/>
    </div>
  );
};

export default Card;
