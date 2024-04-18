import React, { useState, useEffect } from "react";
import Card from "./componentes/Card";
import "./App.css";

function idaleatorio() {
  const numeros = [];
  for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 857));
  }
  numeros.toString();
  return numeros;
}

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + idaleatorio())
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}
export default App;
