import './App.css';
import React, {useState} from 'react';
import axios from 'axios';


function App() {
  const [pokemon,setPokemon] =([]);

  const fetchAPI = () => {

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(ressponse => setPokemon(ressponse.data))
    .catch(err => console.log(err))
  };
    return (
    <div className="App">
      <button onClick={fetchAPI}> FETCH POKEMON </button>

    </div>
  );
}

export default App;
