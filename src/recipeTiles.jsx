import React from "react";
import "./index.css";
import recipe1Image from "./images/recipe1.png"; //burgur
import recipe2Image from "./images/recipe2.png"; //salod

function RecipeTiles() {
  return (
    <div className="recipetilesContainer">
      <RecipeTile
        html="recipe1.html"
        image={recipe1Image}
        title="Deluxe Mario Bros. Burger"
      />

      <RecipeTile
        html="recipe2.html"
        image={recipe2Image}
        title="Yoshi's Starfruit Summer Salad"
      />
    </div>
  );
}

function RecipeTile(props) {
  return (
    <figure className="recipe-tile">
      <p>
        <a href={props.html}>
          <img src={props.image}></img>
        </a>
      </p>
      <figcaption>{props.title}</figcaption>
    </figure>
  );
}

export default RecipeTiles;
