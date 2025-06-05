import { ThemeButton } from "../../Molecules/ThemeButton/ThemeButton";
import "./MainLayout.scss";

const MainLayout = ({ leftContent, rightContent }) => {
    return (
        <div className="container">
            <div className="leftContent">
                <ThemeButton />
                {leftContent}
            </div>
            <div className="rightContent">{rightContent}</div>
        </div>
    );
};

export { MainLayout };
