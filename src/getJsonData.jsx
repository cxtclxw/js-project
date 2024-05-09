import { useEffect, useState } from "react";

//returns json information as an array
//use the absolute path for the json (example: src/recipes/cheeseburger.json)
export function getJsonData(json) {
    let [Jdata, setJData] = useState([]);

    let filePath = `${json}`;

    function myEffect() {
        fetch(filePath)
            .then((response) => response.json())
            .then((data) => setJData(data));
    }

    useEffect(myEffect, []);

    return Jdata;
}
