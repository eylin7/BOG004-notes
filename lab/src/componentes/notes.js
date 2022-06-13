import React, { useEffect } from "react";
import { useState } from "react";
import "../componentes/notes.css";
import { saveNote, getNotes } from "../firebase/firebaseConfig";

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
          <div key={index}>
            <p>{note.title}</p>
            <p>{note.description}</p>
          </div>
        ))}
      </div>
      <div className="notesFooter"></div>
    </div>
  );
};
export default Notes;
