const JSON = "src/recipes/cheeseburger.json";
import React from "react";
import ReactDOM from "react-dom/client";
import RecipeTemplate from "./RecipeTemplate.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import data from "./recipes/cheeseburger.json";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RecipeTemplate data={data} json={JSON} />
    <Footer />
  </React.StrictMode>
);
