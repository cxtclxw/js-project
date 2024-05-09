import React from "react";
import { getJsonData } from "./getJsonData";
import "./index.css";

function RecipeTiles() {
    return (
        <div className="recipetilesContainer">
            <div>
                <RecipeTile json="/src/recipes/cheeseburger.json" />
            </div>
            <div>
                <RecipeTile json="/src/recipes/salad.json" />
            </div>
        </div>
    );
}

export function RecipeTile(props) {
    let html = getJsonData(props.json).html;
    let image = getJsonData(props.json).image;
    let title = getJsonData(props.json).title;
    return (
        <figure className="recipe-tile">
            <p>
                <a href={html}>
                    <div className="imgContainer">
                        <img src={image}></img>
                    </div>
                </a>
            </p>
            <figcaption>{title}</figcaption>
        </figure>
    );
}

export default RecipeTiles;
