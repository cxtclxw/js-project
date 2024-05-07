import React from "react";
import "./index.css";
import "./recipe.css";

function RecipeTemplate(props) {
    var data = props.data;
    console.log(data);
    return (
        <>
            <Intro
                title={data.title}
                author={data.author}
                par={data.description}
            />
            <Bookmark />
            <InfoBox infos={data.information} />
            <Ingredients ingredients={data.ingredients} />
            <Directions directions={data.directions} />
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
    var infoList = props.infos.map((info) => (
        <div>
            {info[0]}: {info[1]}
        </div>
    ));

    return (
        <>
            <div>{infoList} </div>
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

function Directions(props) {
    var directionsList = props.directions.map((direction) => (
        <li>{direction}</li>
    ));

    return (
        <>
            <h2>Directions</h2>
            <ol>{directionsList}</ol>
        </>
    );
}

function NutritionalFacts(props) {
    return (
        <>
            <div>Prep Time: {props.prepTime}</div>
            <div>Cook Time: {props.cookTime}</div>
            <div>Total Time: {props.totalTime}</div>
            <div>Servings Time: {props.servings}</div>
        </>
    );
}

export default RecipeTemplate;
