import { createContext } from "react";
// Crear el context que s'importarà en els diferents components
// S'inicialitza a null
const PokemonContext = createContext(["https://pokeapi.co/api/v2/pokemon/1"]);

export default PokemonContext;