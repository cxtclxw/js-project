import React from "react";
import "./index.css";

function RecipeTemplate(props) {
    return (
        <>
            <Intro title={props.title} author={props.author} par={props.par} />
            <Bookmark />
            <InfoBox
                prepTime={props.prepTime}
                cookTime={props.cookTime}
                totalTime={props.totalTime}
                servings={props.servings}
            />
            <Ingredients ingredients={props.ingredients} />
        </>
    );
}

function Intro(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <div>{props.author}</div>
            <p>{props.par}</p>
        </>
    );
}

function Bookmark() {
    return <button onClick={addFavorites}>Add to Favorites</button>;
}

function addFavorites() {
    //add to favorites code
}

function InfoBox(props) {
    return (
        <>
            <div>Prep Time: {props.prepTime}</div>
            <div>Cook Time: {props.cookTime}</div>
            <div>Total Time: {props.totalTime}</div>
            <div>Servings Time: {props.servings}</div>
        </>
    );
}

function Ingredients(props) {
    var ingredientsList = props.ingredients.map((ingredient) => (
        <li>{ingredient}</li>
    ));

    return (
        <>
            <h2>Ingredients</h2>
            <ul>{ingredientsList}</ul>
        </>
    );
}

export default RecipeTemplate;
