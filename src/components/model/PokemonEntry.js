import {useEffect, useContext, useState} from "react";
import PokemonContext from "../contexts/PokemonContext";
import {fetchData} from "../../helpers/fetch";
import PokemonList from "./PokemonList";

function PokemonEntry() {
    const {pokemon} = useContext(PokemonContext);
    const upperCase = (text) =>{
        return text.charAt(0).toUpperCase() + text.slice(1)
    };
    return (
        <div id="currentPokemon">
           <div id="title">
               {"#"+pokemon.id+" "+upperCase(pokemon.name)}

           </div>
        </div>
    );
}

export default PokemonEntry;