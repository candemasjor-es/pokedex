import "./MainLayout.scss";

const MainLayout = ({ leftContent, rightContent }) => {
    return (
        <div className="container">
            <div className="leftContent">{leftContent}</div>
            <div className="rightContent">{rightContent}</div>
        </div>
    );
};

export { MainLayout };
