import React from "react";

//Para pintar las notas en la interfaz
//Aca recibimos los props
export const Note = ({title, description, editNoteWall, deleTe}) => {
  
  return (
    <div className="menu">
      <div className="menu-main__container">
        <article><h2>{title}</h2></article>
        <article><p>{description}</p></article>
        <button type="button" onClick={editNoteWall} >
        Editar
      </button>
      <button type="button" onClick={deleTe} >
       eliminar
      </button>
      </div>
    </div>
  );
};