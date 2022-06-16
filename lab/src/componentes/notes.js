import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import "../componentes/notes.css";
import { saveNote, getNotes, editNote, deleteNote } from "../firebase/firebaseConfig";
import { Note } from "./Note";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [thisNote, setThisNote] = useState({
    title: "",
    description: "",
    id: "",
  });
  //guardar nota
  const saveNoteWall = () => {
    if (!thisNote.id) {
      saveNote(thisNote.title, thisNote.description);
    } else {
      editNote(thisNote.id, thisNote.title, thisNote.description);
      setThisNote({
        title: "",
        description: "",
        id: "",
      });
    }
    getListNotes();
  };
  //traer notas
  useEffect(() => {
    getListNotes();
    console.log(notes);
  }, []);

  const getListNotes = async () => {
    const notes = await getNotes();
    setNotes(notes);
    // cuando crean una nueva nota [...notes, newNote]s
    console.log(notes);
  };
  // Para editar
  const editNoteWall = (note) => {
    setThisNote(note);
  };
  const setTitle = (title) => {
    setThisNote((prev) => ({ ...prev, title }));
  };
  const setDescription = (description) => {
    setThisNote((prev) => ({ ...prev, description }));
  };

  //Para eliminar la nota
  const deleTe = (id)=> {
   deleteNote(id)
   getListNotes();
  }

  //Cerrar sesión con el boton
  let Navigate= useNavigate()
  function signOff(e){
    e.preventDefault();
    console.log("click")
    Navigate("/")
  }

  return (
    <div className="notesContainer">
      <div className="notasHeader">
        <h1>you always can notes</h1>
      </div>
      <div className="notesBody">
        <input
          className="textinput"
          value={thisNote.title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
        <textarea
          className="textnote"
          value={thisNote.description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripcion"
        />

        <button onClick={saveNoteWall}>Publicar</button>
        {notes.map((note, index) => (
          <Fragment key={index}>
            <div>HOLAAAAAAAAAAAA</div>
            <Note
              title={note.title}
              description={note.description}
              editNoteWall={() => {
                editNoteWall(note);
              }}
              deleTe={() =>{deleTe(note.id)}}
            />
          </Fragment>
        ))}
        <button className="public" onClick={signOff}>
       Cerrar seción
      </button>
      </div>
      <div className="notesFooter"></div>
    </div>
  );
};
export default Notes;
