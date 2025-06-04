import "./CharacterItem.scss";

const CharacterItem = ({ name, img }) => {
    return (
        <div className="pokemonItemContainer">
            <img src={img} alt={`${name}.png`} />
            <p>{name}</p>
        </div>
    );
};

export { CharacterItem };
