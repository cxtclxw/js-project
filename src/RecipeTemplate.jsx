import React, { useState } from "react";
import Bookmark from "./Bookmark.jsx";
import "./index.css";
import "./recipe.css";

function RecipeTemplate(props) {
    let json = props.json;
    let data = props.data;

    //Returns the page
    return (
        <main>
            <Intro
                json={json}
                title={data["title"]}
                author={data["author"]}
                date={data["date"]}
                par={data["description"]}
            />
            <div className="imgContainer">
                <img src={data["image"]}></img>
            </div>
            <InfoBox infos={data["information"]} />

            <Ingredients ingredients={data["ingredients"]} />
            <Directions directions={data["directions"]} />
            <NutritionalFacts nutri={data["nutritionFacts"]} />
        </main>
    );
}

//The intro, includes the name of the recipe, author and description
function Intro(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <div>
                By {props.author} -{" "}
                <span className="pale">Updated on {props.date}</span>
            </div>
            <Bookmark json={props.json} />
            <p>{props.par}</p>
        </>
    );
}

//Shows information about the recipe in a list using arrays
//info[0] is the name of the info
//info[1] is the value of the info
function InfoBox(props) {
    return (
        <>
            <div className="container">
                <Box lists={props.infos} />
            </div>
        </>
    );
}

function Box(props) {
    let leftColumn = [];
    let rightColumn = [];

    for (let i = 0; i < props.lists.length; i++) {
        if (i % 2 == 0) {
            leftColumn.push(props.lists[i]);
        } else {
            rightColumn.push(props.lists[i]);
        }
    }

    let leftList = leftColumn.map((list) => (
        <div key={list[0]}>
            {list[0]}: {list[1]}
        </div>
    ));

    let rightList = rightColumn.map((list) => (
        <div key={list[0]}>
            {list[0]}: {list[1]}
        </div>
    ));

    return (
        <>
            <div className="column">{leftList}</div>
            <div className="column">{rightList}</div>
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
    return (
        <>
            <h2>Nutritional Facts</h2>
            <div className="container">
                <Box lists={props.nutri} />
            </div>
        </>
    );
}

export default RecipeTemplate;
