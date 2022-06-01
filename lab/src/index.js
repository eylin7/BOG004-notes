import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter  } from "react-router-dom";
import Router from "./componentes/App.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </React.StrictMode>
);

export default Router