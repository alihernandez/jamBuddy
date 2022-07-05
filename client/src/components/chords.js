import React, { useEffect, useState } from "react";


export default function ChordList(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch(`http://localhost:3001/posts`);
            console.log("something happened")
            // console.log(response)

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);

                return;
            }

            const data = await response.json();
            setData(data);
            console.log(data);
        }

        getData();

        return;
    }, [data.length]);

    console.log(props);

    return(
        <div>
        <div>
            <button></button>
        </div>
            <div id="chordDiagram">

            </div>
    </div>
    )
}

