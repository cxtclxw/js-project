import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="wrapper">
        <a id="logo">
          <img
            src="https://images.cooltext.com/5696823.gif"
            width="500"
            height="94"
            alt="Chef Level 99"
          />
        </a>
        <a id="buttons" href="recipes.html">
          Recipes
        </a>
        &nbsp;
        <a id="buttons" href="favorites.html">
          Favorites
        </a>
      </div>
    </>
  );
}

export default App;
