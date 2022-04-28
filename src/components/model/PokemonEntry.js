import {useEffect, useContext, useState} from "react";
import PokemonContext from "../contexts/PokemonContext";
import {fetchData} from "../../helpers/fetch";
import PokemonList from "./PokemonList";

function PokemonEntry() {
    const {pokemon} = useContext(PokemonContext);
    const [currentPokemon, setCurrentPokemon] = useState([]);
    const getData = (id) => {
        const url="https://pokeapi.co/api/v2/pokemon/"+id;
        fetchData(url)
            .then(function (data) {
                setCurrentPokemon([data]);
            })
            .catch(function (err) {
                console.error(err);
            });
    }
    const upperCase = (text) =>{
        return text.charAt(0).toUpperCase() + text.slice(1)
    };
    useEffect(() => {
        getData(pokemon.id);
    }, [pokemon]);
    return (
        <div id="currentPokemon">
           <div id="title">
               {pokemon===[]?"#1 Bulbasaur":"#"+pokemon.id+" "+pokemon.name}
           </div>
            <div id="image">
                <img src={currentPokemon[0].sprites.other["official-artwork"].front_default} style={{width: "300px"}}/>
            </div>
        </div>
    );
}

export default PokemonEntry;