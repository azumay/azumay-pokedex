import {useEffect, useContext, useState} from "react";
import PokemonContext from "../PokemonContext";
import {fetchData} from "../../helpers/fetch";
import PokemonList from "./PokemonList";

function PokemonEntry() {
    const {pokemon} = useContext(PokemonContext);
    const [currentPokemon, setCurrentPokemon] = useState([]);
    const upperCase = (text) =>{
        return text.charAt(0).toUpperCase() + text.slice(1)
    };
    const getData = () => {
        fetchData(pokemon)
            .then(function (data) {
                setCurrentPokemon([data]);

            })
            .catch(function (err) {
                console.error(err);
            });
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <PokemonList />,
        <div id="currentPokemon">
            {
                <div>
                console.log(currentPokemon);
                currentPokemon.map((data)=>(
                    <p>data.name</p>
                ))
                </div>
            }
        </div>
    );
}

export default PokemonEntry;