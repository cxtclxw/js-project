import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import RecipeTiles from "./recipeTiles.jsx";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <RecipeTiles />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
