import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { RecipeTile } from "./recipeTiles.jsx";
import { getJsonData } from "./getJsonData.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Header />
        <main>
            <h1>Favorites</h1>
            <Favorites />
        </main>
        <Footer />
    </React.StrictMode>
);

function Favorites() {
    var favorites = getFavoritesList();
    //Shows a link to the recipes that have been favorited
    var favoritesList = favorites.map((recipe) => (
        <div>
            <RecipeTile key={getJsonData(recipe).title} json={recipe} />
        </div>
    ));

    console.log(favorites);
    if (favorites == "") {
        favoritesList = "You don't have any favorite recipes...";
    }

    return <div className="recipetilesContainer">{favoritesList}</div>;
}

//Decodes the cookies into an array and returns it
function getFavoritesList() {
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split("; ");
    let favorites = [];
    for (let i = 0; i < ca.length; i++) {
        let fav = ca[i];
        let splitFav = fav.split("=");
        favorites.push(splitFav[0]);
    }
    return favorites;
}
