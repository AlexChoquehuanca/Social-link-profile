import React from "react";
import UserDetails from "./UserDetails";
import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  const user = props.user;
  console.log (user);
  //const sociallinks = user["Social-links"]
  return (
    <NavLink to={`/character?id=${user.id}`}>
      <div>
        <UserDetails user={user} />
        {/* <ButtonSection sociallinks = {sociallinks}/> */}
      </div>
      
    </NavLink>
  );
};

export default Card;
