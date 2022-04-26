import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';
import PokemonContext from "./components/PokemonContext";
import {useState} from "react";
function App() {
    const [pokemon,setPokemon] = useState([]);
  return (
      <PokemonContext.Provider value={{pokemon, setPokemon}}>
        <div className="App">
          <header className="App-header">
            <Pokemon />
          </header>
        </div>
      </PokemonContext.Provider>
  );
}

export default App;
