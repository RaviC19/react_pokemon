import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState([]);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  useEffect(
    function() {
      document.title = "Clicked" + counter + " times";
      console.log("Using the useEffect hook");

      fetch("http://192.168.0.52:5000/pokemon")
        .then(res => res.json())
        .then(data => setCounter(data.payload));
    },
    [counter]
  );

  return (
    <div className="App">
      <h1 onClick={incrementCounter}>Pokemons</h1>
      <li>
        {counter.map(x => (
          <li>
            {x.name} <li>{x.description}</li> <img src={x.img_url}></img>
          </li>
        ))}
      </li>
    </div>
  );
}

export default App;
