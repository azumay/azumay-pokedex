import './App.css';
import PokemonList from './components/model/PokemonList';
import PokemonEntry from './components/model/PokemonEntry';
import PokemonContext from "./components/contexts/PokemonContext";
import {useState} from "react";
// import {useState} from "react";
function App() {
    const [pokemon,setPokemon] = useState([]);
    return (
      <PokemonContext.Provider value={{pokemon,setPokemon}}>
        <div className="App">
          <header className="App-header">
              <PokemonList />
              <PokemonEntry />
          </header>
        </div>
      </PokemonContext.Provider>
  );
}

export default App;
