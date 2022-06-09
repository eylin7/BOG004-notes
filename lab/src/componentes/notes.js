import React,{useEffect} from "react"
import { useState } from "react"
import '../componentes/notes.css'
import { saveNote, getNotes } from "../firebase/firebaseConfig"


const Notes = () => {
    const [commentText,setCommentText] = useState("")
    const [title, setTitle] = useState("")
    const [ notes, setNotes] = useState([]);


     //guardar nota
    const saveNoteWall = () =>{
      saveNote(title, commentText)
    
  }
  //traer notas 
    useEffect(() =>{
    getListNotes()
     console.log(notes)
     },[])

     const getListNotes = async() =>{
      const notes= await getNotes();
      setNotes(notes);
      // cuando crean una nueva nota [...notes, newNote]s
      console.log(notes)
    }

    if (!notes.length) return <div>Loading...</div>
      
 return (
    <div className="notesContainer"> 
    <div className="notasHeader" >
    <h1>you always can notes</h1>
    </div>
    <div className="notesBody">
    <input className='textnote' value={title}  onChange={e => setTitle(e.target.value)} placeholder='title'/>
    <textarea className='textnote' value={commentText}  onChange={e => setCommentText(e.target.value)} placeholder='Descripcion'/>
    <button onClick={saveNoteWall}>Publicar</button>
    </div>
    <div className="notresFooter"></div>
    </div>
  
)
}
export default Notes