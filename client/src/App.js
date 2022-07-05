import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import ChordList from './components/chords';
import Scale from './components/Scale';


function App(props) {
//   const [state, setState] = useState([]);

//   const data = async () => {
//     const response = await fetch("/posts");
//     const data = await response.json();

//     console.log(data);

//     setState(data);
//   }

// useEffect(() => {
//   data();
// }, []);

  return (
    <div className="App">
      <h1>JamBuddy</h1>
      <div className='optionsBar'>

      </div>
      <Scale />
        <Routes>
          <Route exact path="/" element={ChordList} />
          <Route exact path='/scale' element={Scale} />
        </Routes>
      </div>
  )
  };

export default App;
