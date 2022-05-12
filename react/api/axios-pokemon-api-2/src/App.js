import './App.css';
import React, {useState} from 'react';
import axios from 'axios';


function App() {
  const [pokemon,setPokemon] =useState([]);


  const fetchAPI = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then (response =>{
      console.log(response.data.results)
      setPokemon(response.data.results)
    })
    .catch(err => console.log(err))
    }
    return (
      <div className="App">
      <h1> Pokemon Names!!! </h1>
      <button onClick={fetchAPI}> FETCH POKEMON </button>
      <hr/>

      <div>
        {
          pokemon?
          // iterate through array
          //display names only 
          pokemon.map((item,index) => {
            return(
                <ul
                key ={index}>
                    <li> {item.name} </li>
                </ul>
            )
        })
        :
          <p> Sorry no pokemon. </p>
        }
      </div>
    </div>
  );
}

export default App;