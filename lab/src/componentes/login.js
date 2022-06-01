import React, { useEffect } from "react";
import '../style.css'
import { collection, getDocs,  } from "firebase/firestore/lite";
import db from "../firebase/firebaseConfig";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "../firebase/firebaseControler.js" 
import { useNavigate} from 'react-router-dom';
// import { async } from '@firebase/util';

  const Login = () => {  
  const navigate = useNavigate()
  useEffect(() => {
      const obtenerDatos = async () => {
      const data = await getDocs(collection( db , "notes" ));
      console.log("dataaaaaa", data);
    }
   obtenerDatos();
  }, []);
  
    const authGoogle = () => {
    const provider = new GoogleAuthProvider();
    navigate('/Notes');
    const auth = getAuth();
    return signInWithPopup(auth, provider);
  };
  // interfaz 
  return (
    <div className="login">
      <h1>you always can notes</h1>
      <label htmlFor="username">
        <span></span>
        {<input id="nameUsuario" type="text" placeholder="Usuario"></input>}
        {
          <input
            id="nameUsuario"
            type="password"
            placeholder="contraseña"
          ></input>
        }
        {<button className="button" onClick={authGoogle}> Ingresar con google</button>}
      </label>
    </div>
  );
};

export default Login;
