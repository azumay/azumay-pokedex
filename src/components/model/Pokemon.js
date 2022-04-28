import {useEffect, useContext, useState} from "react";
import PokemonContext from "../PokemonContext";
import {fetchData} from "../../helpers/fetch";

// function Pokemon() {
//     // const {pokemon,setPokemon} = useContext(PokemonContext);
//     // setPokemon("https://pokeapi.co/api/v2/pokemon/"+"1");
//     console.log(pokemon);
//     const [currentPokemon, setCurrentPokemon] = useState([]);
//     const upperCase = (text) =>{
//         return text.charAt(0).toUpperCase() + text.slice(1)
//     };
//     const getData = () => {
//         fetchData(pokemon)
//             .then(function (data) {
//                 //console.log(data);
//                 setCurrentPokemon([data]);
//             })
//             .catch(function (err) {
//                 console.error(err);
//             });
//     }
//     useEffect(() => {
//         getData();
//     }, [pokemon]);
//     return (
//         <div id="currentPokemon">
//             {
//                 currentPokemon.map((element) => (
//                     console.log(element),
//                         <div id={"pokemon_" + element.id}>
//                             <div id={"pokemon_" + element.id + "_name"}>
//                                 <h1>
//                                     {"#" + element.id + " " + upperCase(element.name)}
//                                 </h1>
//                             </div>
//                             <div id={"pokemon_" + element.id + "_sprite"}>
//                                 <img src={element.sprites.other["official-artwork"].front_default} style={{width: "300px"}}
//                                      alt="pokemon front image"/>
//                             </div>
//                             <div id={"pokemon_" + element.id + "_information"}>
//                                 <div id={"pokemon_" + element.id + "_types"}>
//                                     <p>
//                                         {
//                                             element.types.map((currentType) => (
//                                                 <label
//                                                     className={"type_" + currentType.slot}>{"Type " + currentType.slot + ": " + upperCase(currentType.type.name) + " "}</label>
//                                             ))
//                                         }
//                                     </p>
//                                 </div>
//                                 Height: {element.height} - Weight: {element.weight}
//                             </div>
//                             <div className="moveList">
//                                 <p>Moves:</p>
//                                 <table className="moves">
//                                     <thead>
//                                     <tr>
//                                         <td>Number</td>
//                                         <td>Name</td>
//                                         <td>Learned</td>
//                                     </tr>
//                                     </thead>
//                                         <tbody>
//                                         {
//                                             element.moves.map((move, i = 1) => (
//                                                 <tr>
//                                                     <td>
//                                                         {i}
//                                                     </td>
//                                                     <td>
//                                                         {upperCase(move.move.name)}
//                                                     </td>
//                                                     <td>
//                                                         {
//                                                             move.version_group_details[0].move_learn_method.name==="level-up"?
//                                                             "Level " + move.version_group_details[0].level_learned_at
//                                                             :
//                                                                 upperCase(move.version_group_details[0].move_learn_method.name)
//                                                         }
//                                                     </td>
//                                                 </tr>
//                                             ))
//                                         }
//                                         </tbody>
//                                 </table>
//                             </div>
//                         </div>
//
//                 ))
//             }
//         </div>
//     );
// }
//
// export default Pokemon;