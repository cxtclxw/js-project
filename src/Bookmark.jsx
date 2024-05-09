import React, { useState } from "react";

function Bookmark(props) {
    var textValues = ["Add to Favorites", "Remove from Favorites"];

    var initText = textValues[0];
    var initAdded = false;

    // Check if the page is already added to the favorites to know if it should say "Add" or "Remove"

    if (hasCookie(props.json)) {
        initText = textValues[1];
        initAdded = true;
    }

    //Set Initial Values
    const [bText, setBText] = useState(initText);
    const [added, setAdded] = useState(initAdded);

    //Toggles if the Recipe is added or not
    const toggleFavorites = () => {
        if (added) {
            setBText(textValues[0]);
            setAdded(false);
            document.cookie =
                props.json +
                "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        } else {
            setBText(textValues[1]);
            setAdded(true);
            document.cookie = props.json + "=";
        }
    };

    return (
        <>
            <button onClick={toggleFavorites}>{bText}</button>
        </>
    );
}

//Returns whether a cookie exists with the name entered
function hasCookie(name) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return true;
        }
    }
    return false;
}

export default Bookmark;
