import './App.css';
import React,{useState} from 'react';
import FetchButton from './components/FetchButton';
import FetchDisplay from './components/FetchDisplay';

function App() {
  //set state
  const [pokemon, setPokemon] = useState([]);


  return (
    <div className="App">
      <FetchButton pokemon = {pokemon} setPokemon = {setPokemon} />
      <FetchDisplay pokemon = {pokemon} />
    </div>
  );
}

export default App;
