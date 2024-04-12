import React, { useState, useEffect } from "react";
import Card from "./componentes/Card";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://661037d10640280f219c9906.mockapi.io/api/v2/Users")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setUsers(data);
        //console.log(data);
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
