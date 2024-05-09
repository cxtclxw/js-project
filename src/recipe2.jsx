const JSON = "src/recipes/salad.json";
import React from "react";
import ReactDOM from "react-dom/client";
import RecipeTemplate from "./recipeTemplate.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import data from "./recipes/salad.json";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Header />
        <RecipeTemplate data={data} json={JSON} />
        <Footer />
    </React.StrictMode>
);
