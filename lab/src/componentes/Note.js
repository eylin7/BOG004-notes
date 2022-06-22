import React from "react";

//Para pintar las notas en la interfaz
//Aca recibimos los props
export const Note = ({title, description, editNoteWall, deleTe}) => {
  
  return (
    <div className="woll">
      <div className="container-tarjetas">
        <article><h2>{title}</h2></article>
        <article><p>{description}</p></article>
        <button className="btn-editar" type="button" onClick={editNoteWall} >
        Editar
      </button>
      <button className="btn-eliminar" type="button" onClick={deleTe} >
       Eliminar
      </button>
      </div>
    </div>
  );
};