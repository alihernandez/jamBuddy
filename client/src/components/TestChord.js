import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Chord = (props) => (
 <tr>
   <td>{props.chord.title}</td>
   <td>{props.chord.position}</td>
   <td><img src={props.chord.description} alt="chrdImg"/></td>
   {/* <td>
     <Link className="btn btn-link" to={`/edit/${props.chord._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deletechord(props.chord._id);
       }}
     >
       Delete
     </button>
   </td> */}
 </tr>
);
 
export default function TestList() {
 const [chords, setChords] = useState([]);
 
 // This method fetches the chords from the database.
 useEffect(() => {
   async function getChords() {
     const response = await fetch(`http://localhost:3001/posts/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const chords = await response.json();
     setChords(chords);
   }
 
   getChords();
 
   return;
 }, [chords.length]);
 
 // This method will delete a chord
 async function deleteChord(id) {
   await fetch(`http://localhost:3001/${id}`, {
     method: "DELETE"
   });
 
   const newChords = chords.filter((el) => el._id !== id);
   setChords(newChords);
 }
 
 // This method will map out the chords on the table
 function chordList() {
   return chords.map((chord) => {
     return (
       <Chord
         chord={chord}
         deleteChord={() => deleteChord(chord._id)}
         key={chord._id}
       />
     );
   });
 }
 
 // This following section will display the table with the chords of individuals.
 return (
   <div>
     <h3>chord List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Chord</th>
           <th>Position</th>
           <th>Description</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{chordList()}</tbody>
     </table>
   </div>
 );
}