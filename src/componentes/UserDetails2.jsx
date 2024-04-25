import React, { useState, useEffect } from "react";
import "./UserDetails2.css";

const UserDetails2 = ({episode}) => {
  // const user = props.user; no es necesario porque antes usabamos prop para llamar y ahora directamente llamamos con user en UserDetails
  console.log (episode)
  return (
    <div className="Contenedor2">
      <h1 className="nombre">{episode.name}</h1>
      <h1 className="letratitulo"> Episodio:</h1>
      <p className="letranormal">{episode.episode} </p>
      <h1 className="letratitulo"> Cuando salio al aire:</h1>
      <p className="letranormal">{episode.air_date} </p>
    </div>
  );
};
export default UserDetails2;