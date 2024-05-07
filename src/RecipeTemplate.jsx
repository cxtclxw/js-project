import React from "react";
import "./index.css";
import "./recipe.css";

var json;

function RecipeTemplate(props) {
    var data = props.data;
    json = props.json;
    return (
        <>
            <Intro
                title={data.title}
                author={data.author}
                par={data.description}
            />
            <Bookmark />
            <UnBookmark />
            <InfoBox infos={data.information} />
            <Ingredients ingredients={data.ingredients} />
            <Directions directions={data.directions} />
            <NutritionalFacts nutri={data.nutritionFacts} />
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
    return (
        <button id="bookmark" onClick={addFavorites}>
            Add to Favorites
        </button>
    );
}

function UnBookmark() {
    return (
        <button id="unbookmark" onClick={removeFavorites}>
            Remove from Favorites
        </button>
    );
}

function addFavorites() {
    document.cookie = json;
    //bookmark.onClick = removeFavorites;
    //bookmark.text = "Remove Favorites";
}

function removeFavorites() {
    document.cookie = json + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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
    var nutritionList = props.nutri.map((nutri) => (
        <div>
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
