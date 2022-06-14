import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import "../componentes/notes.css";
import { saveNote, getNotes, editNote } from "../firebase/firebaseConfig";
import { Note } from "./Note";

const Notes = () => {
  const [commentText, setCommentText] = useState(""); //es el estado inicial 
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]);

  //guardar nota
  const saveNoteWall = () => {
    saveNote(title, commentText);
    getListNotes()
  };
  //traer notas
  useEffect(() => {
    getListNotes();
    console.log(notes);
  },[]);

  const getListNotes = async () => {
    const notes = await getNotes();
    setNotes(notes);
    // cuando crean una nueva nota [...notes, newNote]s
    console.log(notes);

  };
  const editNoteWall = (id)=>{
    editNote(id, title, commentText)
    console.log("ID", id);
      }

  return (
    <div className="notesContainer">
      <div className="notasHeader">
        <h1>you always can notes</h1>
      </div>
      <div className="notesBody">
        <input
          className="textinput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
        <textarea
          className="textnote"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Descripcion"
        />

        <button onClick={saveNoteWall}>Publicar</button>
        {notes.map((note, index) => (
        <Fragment key={index}  >
        <div>HOLAAAAAAAAAAAA</div>
         <Note 
          title={note.title} 
          description={note.description}
         editNoteWall={()=> {editNoteWall(note.id)}}
          />
        </Fragment>
        ))}
        
      </div>
      <div className="notesFooter"></div>
    </div>
  );
};
export default Notes;
