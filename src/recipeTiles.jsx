import React from "react";
import "./index.css";

function recipeTiles() {
  return (
    <>
      <body>
        <recipeTile
          html="recipe1.html"
          image="/images/recipe1.png"
          title="Mr. MutherFucking Mario Cheesrburgere"
        />
        <recipeTile
          html="recipe2.html"
          image="/images/recipe2.png"
          title="Starfruit Summer Salad with Yoshi Eggs"
        />
      </body>
    </>
  );
}

function recipeTile(props) {
  return (
    <figure>
      <p>
        <a href={html}>
          <img src={image}></img>
        </a>
      </p>
      <figcaption>{title}</figcaption>
    </figure>
  );
}

export default recipeTiles;
