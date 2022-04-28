import './App.css';
//import Pokemon from './components/Pokemon';
import PokemonList from './components/model/PokemonList';
import PokemonEntry from './components/model/PokemonList';
import PokemonContext from "./components/PokemonContext";
import {useState} from "react";
// import {useState} from "react";
function App() {
    const [pokemon, setPokemon] = useState([]);
  return (
      <PokemonContext.Provider value={{pokemon, setPokemon}}>
        <div className="App">
          <header className="App-header">
              <PokemonEntry />
          </header>
        </div>
      </PokemonContext.Provider>
  );
}

export default App;
