import React from "react"
import { useState } from "react"
import { saveNote } from "../firebase/firebaseConfig"


const Notes = () => {
    const [commentText,setCommentText] = useState("")
    const [title, setTitle] = useState("")
    
    const saveNoteWall = () =>{
      saveNote(title, commentText)
    
  }
      
 return (
    <div className="notesContainer"> 
    <div className="notasHeader" >
    <h1>you always can notes</h1>
    </div>
    <div className="notesBody">
    <textarea className='textnote' value={title}  onChange={e => setTitle(e.target.value)} placeholder='Descripcion'/>
    <textarea className='textnote' value={commentText}  onChange={e => setCommentText(e.target.value)} placeholder='Descripcion'/>
    <button onClick={saveNoteWall}>Publicar</button>
    </div>
    <div className="notresFooter"></div>
    </div>
  
)
}
export default Notes