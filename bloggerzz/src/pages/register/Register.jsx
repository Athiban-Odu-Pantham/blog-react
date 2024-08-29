import "./register.css";
import { Link } from "react-router-dom";
export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>UserName</label>
                <input type="text" className="registerInput" placeholder="Enter your username" />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password" />
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email" />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton"><Link to="/home" className="l3">Login</Link></button>
        </div>
    );
}


