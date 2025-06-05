import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { CharacterItem } from "../../Molecules/CharacterItem/CharacterItem";
import "./DragonBallList.scss";

const DragonBallList = () => {
    const [characters, setCharacters] = useState([]);
    const theme = useContext(ThemeContext);

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
            <h2>Dragon ball</h2>
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
