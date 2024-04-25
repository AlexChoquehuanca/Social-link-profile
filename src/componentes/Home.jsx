import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Episode.css"
import "./App.css";


function idaleatorio() {
  const numeros = [];
  for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 100));
  }
  numeros.toString();
  return numeros;
}

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(
      "https://rickandmortyapi.com/api/character/"+idaleatorio()
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);
  console.log (users)
  let aux
  console.log(users.map((aux) => (aux={aux})))
  
  return (
    <div>
       <div>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
    </div>
  );
}
export default Home;
