import React from "react";
import '../style.css'
import { useNavigate} from 'react-router-dom';
import {authGoogle} from '../firebase/firebaseConfig'
// import { async } from '@firebase/util';

const Login = () => {  
  const navigate = useNavigate()
  const loginWthGoogle = () => {
    authGoogle().then((result) => {
      navigate('/Notes');
      console.log(result);
    })
     .catch(error => console.log(error))
  };
  
  return (
    <div className="login">
      <h1 className="titulo-login" >you always can notes</h1>
      <div className="imagen-titulo" ></div>
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
        {<button className="button" onClick={loginWthGoogle}> Ingresar con google</button>}
      </label>
    </div>
  );
};

export default Login;

