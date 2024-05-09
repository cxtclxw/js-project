import { useEffect, useState } from "react";

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
