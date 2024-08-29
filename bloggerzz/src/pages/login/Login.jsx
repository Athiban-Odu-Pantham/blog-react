import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./Firebase-config";
import { useNavigate } from "react-router-dom";
import "./login.css";
import "../register/Register";
import { Link } from "react-router-dom";

export default function Login({ setIsLogged }) {
  let navigate = useNavigate();

  const LoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isLoggedin", true);
        setIsLogged(true);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing in with Google: ", error);
      });
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="email" className="loginInput" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your password" />
        <button className="loginButton">
          <Link to="/home" className="l1">Login</Link>
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="l1">Register</Link>
      </button>
      <div className="googleLogin">
         <button className="loginButton" onClick={LoginWithGoogle}>
  Login with Google
</button> 

      </div>
    </div>
  );
}
