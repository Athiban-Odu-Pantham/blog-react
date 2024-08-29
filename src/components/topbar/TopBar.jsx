import "./TopBar.css";
import img6 from "./bg4.png";
import img7 from "./bg2.jpg";
import { Link } from "react-router-dom";

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <img src={img6} className="i1" alt="Logo" />
            </div>
            <div className="topCenter">
                <ul className="toplist">
                    <li className="toplistitem"><Link to="/home">HOME</Link></li>
                    <li className="toplistitem"><Link to="/about">ABOUT</Link></li>
                    <li className="toplistitem"><Link to="/contact">CONTACT</Link></li>
                    <li className="toplistitem"><Link to="/write">WRITE</Link></li>
                    <li className="toplistitem"><Link to="/logout">LOGOUT</Link></li>
                </ul>
            </div>
            <div className="topRight">
                <Link to="/settings">
                    <img className="topImg" src={img7} alt="Settings" />
                </Link>
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}
