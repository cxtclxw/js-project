import React, { useState } from "react";
import Bookmark from "./Bookmark.jsx";
import "./index.css";
import "./recipe.css";

function RecipeTemplate(props) {
    let json = props.json;
    let data = props.data;

    //Returns the page
    return (
        <>
            <Intro
                title={data["title"]}
                author={data["author"]}
                par={data["description"]}
            />
            <Bookmark json={json} />
            <InfoBox infos={data["information"]} />
            <Ingredients ingredients={data["ingredients"]} />
            <Directions directions={data["directions"]} />
            <NutritionalFacts nutri={data["nutritionFacts"]} />
        </>
    );
}

//The intro, includes the name of the recipe, author and description
function Intro(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <div>{props.author}</div>
            <p>{props.par}</p>
        </>
    );
}

//Shows information about the recipe in a list using arrays
//info[0] is the name of the info
//info[1] is the value of the info
function InfoBox(props) {
    let infoList = props.infos.map((info) => (
        <div key={info[0]}>
            {info[0]}: {info[1]}
        </div>
    ));

    return (
        <>
            <div>{infoList} </div>
        </>
    );
}

//Shows a list of all the ingredients needed using an array
function Ingredients(props) {
    let ingredientsList = props.ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ));

    return (
        <>
            <h2>Ingredients</h2>
            <ul>{ingredientsList}</ul>
        </>
    );
}

//Shows a list of all the directions in numbered order using an array
function Directions(props) {
    let directionsList = props.directions.map((direction) => (
        <li key={direction}>{direction}</li>
    ));

    return (
        <>
            <h2>Directions</h2>
            <ol>{directionsList}</ol>
        </>
    );
}

//Shows a list of all the nutritional facts using arrays
function NutritionalFacts(props) {
    let nutritionList = props.nutri.map((nutri) => (
        <div key={nutri[0]}>
            {nutri[0]}: {nutri[1]}
        </div>
    ));

    return (
        <>
            <h2>Nutritional Facts</h2>
            <div>{nutritionList}</div>
        </>
    );
}

export default RecipeTemplate;
