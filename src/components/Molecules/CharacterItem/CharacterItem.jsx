import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import "./CharacterItem.scss";

const CharacterItem = ({ name, img }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={`characterItemContainer${
                theme == "dark" ? "-dark" : ""
            }`}
        >
            <img src={img} alt={`${name}.png`} />
            <p className={`itemText${theme == "dark" ? "-dark" : ""}`}>
                {name}
            </p>
        </div>
    );
};

export { CharacterItem };
