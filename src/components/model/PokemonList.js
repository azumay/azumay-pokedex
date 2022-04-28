import {useContext, useEffect, useState} from "react";
import {fetchData} from "../../helpers/fetch";
import PokemonContext from "../PokemonContext";

function PokemonList() {
    const [currentPokemon, setCurrentPokemon] = useState([]);
    const {pokemon,setPokemon} = useContext(PokemonContext);
    const upperCase = (text) =>{
        return text.charAt(0).toUpperCase() + text.slice(1)
    };
    const handleChange  = async (e)=>{
        const id=e.target.childNodes[e.target.selectedIndex].getAttribute('id');
        const url="https://pokeapi.co/api/v2/pokemon-species/"+id;
        console.log(url);
        fetchData(url)
            .then(function (data) {
                setPokemon(data);
                console.log(pokemon);
            })
            .catch(function (err) {
                console.error(err);
            });
    }
    const getData = () => {
        fetchData("https://pokeapi.co/api/v2/pokedex/1")
            .then(function (data) {
                setCurrentPokemon([data]);
            })
            .catch(function (err) {
                console.error(err);
            });
    }
    useEffect(() => {
        getData();
    }, [pokemon]);
    return (
        <div id="currentPokemon">
            {
                currentPokemon.map((element) => (
                    <select key="pokemon_list" id="pokemon_list" name="pokemon_list" onChange={(e)=>handleChange(e)}>
                        {
                            element.pokemon_entries.map((entry) => (
                                //console.log(entry),
                                <option key={entry["entry_number"]+"_"+entry["pokemon_species"].name} id={entry["entry_number"]} name={entry["entry_number"]+"_"+entry["pokemon_species"].name}>{"#"+entry["entry_number"]+" "+upperCase(entry["pokemon_species"].name)}</option>
                            ))
                        }
                    </select>
                ))
            }
        </div>
    );
}

export default PokemonList;