import {useContext, useEffect, useState} from "react";
import {fetchData} from "../../helpers/fetch";
import PokemonContext from "../PokemonContext";

function PokemonList() {
    const [currentPokemon, setCurrentPokemon] = useState([]);
    const {setPokemon} = useContext(PokemonContext);
    const handleChange = (url)=>{
        fetchData(url)
            .then(function (data) {
                setPokemon([data]);
            })
            .catch(function (err) {
                console.error(err);
            });
    }
    const upperCase = (text) =>{
        return text.charAt(0).toUpperCase() + text.slice(1)
    };
    const getData = () => {
        fetchData("https://pokeapi.co/api/v2/pokedex/1")
            .then(function (data) {
                setCurrentPokemon([data]);
                console.log(currentPokemon)
            })
            .catch(function (err) {
                console.error(err);
            });
    }
    useEffect(() => {
        getData();
    }, [currentPokemon]);
    return (
        <div id="currentPokemon">
            {
                currentPokemon.map((element) => (
                    <select id="pokemon_list" name="pokemon_list">
                        {
                            element.pokemon_entries.map((entry) => (
                                console.log(entry),
                                <option name={entry["entry_number"]+"_"+entry["pokemon_species"].name} onChange={handleChange(entry["pokemon_species"].url)}>{"#"+entry["entry_number"]+" "+upperCase(entry["pokemon_species"].name)}</option>
                            ))
                        }
                    </select>
                ))
            }
        </div>
    );
}

export default PokemonList;