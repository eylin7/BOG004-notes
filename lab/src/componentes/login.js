import React from "react";
import "../componentes/login.css";
import { useNavigate } from "react-router-dom";
import { authGoogle } from "../firebase/firebaseConfig";
// import { async } from '@firebase/util';

const Login = () => {
  const navigate = useNavigate();
  const loginWthGoogle = () => {
    authGoogle()
      .then((result) => {
        console.log("estoy en el then");
        navigate("/Notes");
        console.log(result);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="login">
      <h1 className="titulo-login">Welcome</h1>
      <div className="imagen-titulo"></div>
      <div className="logo">
        <img
          src={require("../image/Y_tú_eres_el_mío__2_-removebg-preview.png")}
        />
      </div>
      <label htmlFor="username">
        {
          <button className="button" onClick={loginWthGoogle}>
            {" "}
            Ingresar con google
          </button>
        }
      </label>
    </div>
  );
};

export default Login;
