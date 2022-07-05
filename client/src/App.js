import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [state, setState] = useState([]);

  const data = async () => {
    const response = await fetch("/api");
    const data = await response.json();

    console.log(data);

    setState(data);
  }

useEffect(() => {
  data();
}, []);



  return (
    <div className="App">
        <p>{!data ? "Loading... ": data}</p>
      </div>
  )};

export default App;
