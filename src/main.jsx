import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import RecipeTiles from "./recipeTiles.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RecipeTiles />
    <Footer />
  </React.StrictMode>
);
