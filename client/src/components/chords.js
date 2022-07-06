import axios from 'axios';
import React, { useEffect, useState } from "react";
import PostsDataService from '../services/app.service';


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
        retrieveData();

        return;
    }, [data.length]);

    const retrieveData = () => {
        PostsDataService.getAll()
          .then(response => {
            setData(response.data);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
          
      };
    

    return(
        <div>
        <div>
            <button></button>
        </div>
            <div id="chordDiagram">
                <h1>Chord:</h1>

               <p>{data.title}</p>

            </div>
    </div>
    )
}

