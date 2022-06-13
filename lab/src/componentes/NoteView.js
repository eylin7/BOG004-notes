import React from "react";

//Para pintar las notas en la interfaz
//Aca recibimos los props
export const NoteView = ({title, description}) => {
  
  return (
    <div className="menu">
      <div className="menu-main__container">
        <article><h2>{title}</h2></article>
        <article><p>{description}</p></article>
      </div>
    </div>
  );
};