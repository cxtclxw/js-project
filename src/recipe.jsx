import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RecipeTemplate from "./RecipeTemplate.jsx";
import data from "./recipes/testRecipe.json";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RecipeTemplate data={data} />
    </React.StrictMode>
);
