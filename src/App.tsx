import React from 'react';
import PokemonSearch from './components/PokemonSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <PokemonSearch name="Tristan Cooper" numberOfPokemon={7}/>
    </div>
  );
}

export default App;
