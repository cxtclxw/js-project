import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RecipeTemplate from "./RecipeTemplate.jsx";

var ingredients = ["Lettuce", "Cheese", "Tomato", "Hamburger"];

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RecipeTemplate
            title="Fudge"
            author="Andy"
            par="our whole universe was in a hot dense state"
            prepTime="10 mins"
            cookTime="30 mins"
            totalTime="40 mins"
            servings="20"
            ingredients={ingredients}
        />
    </React.StrictMode>
);
