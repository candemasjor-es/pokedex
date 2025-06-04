import { BrowserRouter, Routes, Route } from "react-router";
import { PokemonList } from "./components/Organisms/PokemonList/PokemonList";
import { DragonBallList } from "./components/Organisms/DragonBallList/DragonBallList";
import { MainLayout } from "./components/Templates/MainLayout/MainLayout";
import "./App.scss";

function App() {
    return (
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
    );
}

export default App;
