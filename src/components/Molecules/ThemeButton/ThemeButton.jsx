import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

const ThemeButton = () => {
    const { setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme((theme) => (theme === "light" ? "dark" : "light"));
    };

    return <button onClick={toggleTheme}>Change theme</button>;
};

export { ThemeButton };
