import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

function Header() {
  return (
    <>
      <div id="header">
        <a id="logo" href="index.html">
          <img
            src="https://images.cooltext.com/5696823.gif"
            width="500"
            height="100"
            alt="Chef Level 99"
          />
        </a>
        <div id="btnCont">
          <a id="buttons" href="recipes.html">
            Recipes
          </a>
          &nbsp;
          <a id="buttons" href="favorites.html">
            Favorites
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
