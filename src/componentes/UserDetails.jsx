import React, { useState, useEffect } from "react";
import "./UserDetails.css";

const UserDetails = ({user}) => {
  // const user = props.user; no es necesario porque antes usabamos prop para llamar y ahora directamente llamamos con user en UserDetails
  console.log (user)
  return (
    <div className="Contenedor1">
      <div className="contenedorImagen">
        <img
          className="redonda"
          src={user.image}
          alt={`avatar de ${user.name}`}
        ></img>
      </div>
      <h1 className="nombre">{user.name}</h1>
      <button className="letranormal">{user.status} </button>
      <h1 className="letratitulo"> Especie:</h1>
      <p className="letranormal">{user.species} </p>
      <h1 className="letratitulo"> Género:</h1>
      <p className="letranormal">{user.gender} </p>
    </div>
  );
};

export default UserDetails;
