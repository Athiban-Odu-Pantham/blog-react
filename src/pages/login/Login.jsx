import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import img1 from "./google.jpeg";

export default function Login() {
  const handleGoogleSignIn = () => {
    // Handle Google Sign-In functionality here
    console.log("Google Sign-In clicked");
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username</label>
        <input type="text" className="loginInput" placeholder="Enter your Username" />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your password" />
        <button className="loginButton">
          <Link to="/home" className="l1">Login</Link>
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className="l1">Register</Link>
      </button>
      <button className="loginGoogleButton" onClick={handleGoogleSignIn}>
        <img
          src={img1}
          alt="Google Sign-In"
          className="googleLogo"
        />
        Sign in with Google
      </button>
    </div>
  );
}
