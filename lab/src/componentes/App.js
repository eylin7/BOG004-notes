import React from 'react';
import { Routes, Route  } from "react-router-dom";
import Notes from "./notes.js";
import Login from './login.js';


const Router = () => { //cambiar el nombre del componente
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/notes" element={<Notes/>} />
     </Routes>
  )
}

export default Router;