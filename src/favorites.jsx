import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./index.css";
import { getJsonData } from "./getJsonData.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Header />
        <h1>Favorites</h1>

        <Favorites />
        <Footer />
    </React.StrictMode>
);

function Favorites() {
    var favorites = getFavoritesList();

    var favoritesList = favorites.map((recipe) => (
        <div key={getJsonData(recipe).title}>
            <a href={getJsonData(recipe).html}>{getJsonData(recipe).title}</a>
        </div>
    ));
    return <>{favoritesList}</>;
}

function getFavoritesList() {
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    return ca;
}
