import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { PokemonList } from "./components/Organisms/PokemonList/PokemonList";
import { DragonBallList } from "./components/Organisms/DragonBallList/DragonBallList";
import { MainLayout } from "./components/Templates/MainLayout/MainLayout";
import { ThemeContext } from "./contexts/ThemeContext";
import "./App.scss";

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainLayout
                                leftContent={<DragonBallList />}
                                rightContent={<PokemonList />}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    );
}

export default App;
