import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonItem } from "../../Molecules/PokemonItem/PokemonItem";
import "./PokemonList.scss";

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/")
            .then((data) => data.data)
            .then((pokemonList) => {
                setPokemons(pokemonList.results);
            });
    }, []);

    return (
        <div>
            <h2>PokemonList</h2>
            <div className="pokemonsContainer">
                {pokemons.map((pokemon, index) => (
                    <PokemonItem name={pokemon.name} key={index} />
                ))}
            </div>
        </div>
    );
};

export { PokemonList };
