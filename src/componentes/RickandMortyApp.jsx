import React, { useState, useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import Card from "./Card";
import Card2 from "./Card2";
import "./Episode.css"
import "./App.css";

function idaleatorio() {
  const numeros = [];
  for (let i = 1; i < 2; i++) {
    numeros.push(Math.floor(Math.random() * 10));
  }
  numeros.toString();
  return numeros;
}
function RickandMortyApp() {
  const [users, setUsers] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")
  useEffect(() => {
    fetch(
      "https://rickandmortyapi.com/api/character/"+id
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log (users)
  useEffect(() => {
    fetch(
      "https://rickandmortyapi.com/api/episode/1,2"
    )
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data2) => {
        setEpisodes(data2);
      });
  }, []);
  console.log (episodes)
  console.log (id);
  return (
    <div>
      <div className="contenedorDinamico">
      <Card key={users.id} user={users}/>
      {episodes.map((episodes) => (
        <Card2 key={episodes.id} episode2={episodes} />
      ))}
      <NavLink to={"/"}>
        <button className="button">Home</button>
      </NavLink>
      </div>
    </div>
  );
}
export default RickandMortyApp;
