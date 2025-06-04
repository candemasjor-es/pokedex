import axios from "axios";
import { useEffect, useState } from "react";
import { CharacterItem } from "../../Molecules/CharacterItem/CharacterItem";
import "./DragonBallList.scss";

const DragonBallList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
            .get("https://dragonball-api.com/api/characters")
            .then((res) => res.data)
            .then((characterList) => {
                setCharacters(characterList.items);
            });
    }, []);

    return (
        <div>
            <h2>Dragon Ball</h2>
            <div className="charactersContainer">
                {characters.map((character) => {
                    return (
                        <CharacterItem
                            name={character.name}
                            img={character.image}
                            key={character.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export { DragonBallList };
