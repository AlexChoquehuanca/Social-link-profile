import React, { useState, useEffect } from "react";
import "./UserDetails.css";

const UserDetails = ({user}) => {
  // const user = props.user; no es necesario porque antes usabamos prop para llamar y ahora directamente llamamos con user en UserDetails

  return (
    <div className="Contenedor1">
      <div className="contenedorImagen">
        <img
          className="redonda"
          src={user.avatar}
          alt={`avatar de ${user.name}`}
        ></img>
      </div>
      <h1 className="nombre">{user.name}</h1>
      <p className="ubicacion">{user.location}</p>
      <p className="descripcion">{user.description}</p>
    </div>
  );
};

export default UserDetails;
