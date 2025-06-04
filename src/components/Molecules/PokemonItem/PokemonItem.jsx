import "./PokemonItem.scss";

const PokemonItem = ({ name }) => {
    return (
        <div className="pokemonItemContainer">
            <img
                src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
                alt={`${name}.png`}
            />
            <p>{name}</p>
        </div>
    );
};

export { PokemonItem };
