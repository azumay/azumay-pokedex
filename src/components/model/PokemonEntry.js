import {useEffect, useContext, useState} from "react";
import PokemonContext from "../contexts/PokemonContext";
import {fetchData} from "../../helpers/fetch";
import {upperCase} from "../../helpers/upperCase";

function PokemonEntry() {
    const {pokemon} = useContext(PokemonContext);
    const [currentPokemon, setCurrentPokemon] = useState([]);
    const getData = (id) => {
        const url=pokemon.length>0||pokemon?"https://pokeapi.co/api/v2/pokemon/"+id:"https://pokeapi.co/api/v2/pokemon/1";
        fetchData(url)
            .then(function (data) {
                setCurrentPokemon([data]);
            })
            .catch(function (err) {
                console.error(err);
            });
    }
    useEffect(() => {
        getData(pokemon.id);
    }, [pokemon]);
    return (

        <div id="currentPokemon">
           <div id="title">
               {currentPokemon.length>0?"#"+pokemon.id+" "+upperCase(pokemon.name):"Select your Pokémon"}
           </div>
            <div id="image">
                <img src={currentPokemon.length>0?currentPokemon[0].sprites.other["official-artwork"].front_default:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png"} style={{width: "250px"}}/>
            </div>
        </div>
    );
}

export default PokemonEntry;