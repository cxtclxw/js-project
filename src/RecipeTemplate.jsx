import React, { useState } from "react";
import Bookmark from "./Bookmark.jsx";
import "./index.css";
import "./recipe.css";

function RecipeTemplate(props) {
    let json = props.json;
    let data = props.data;
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

function Intro(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <div>{props.author}</div>
            <p>{props.par}</p>
        </>
    );
}

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
