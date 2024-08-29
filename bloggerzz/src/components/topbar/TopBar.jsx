import "./TopBar.css"
import img6 from "./bg4.png"
import img7 from "./bg2.jpg"
import { Link } from "react-router-dom";
export default function TopBar(){
    return (
        <div className="top">
            <div className="topleft">
                <img src={img6} className="i1" />
            </div>
            <div className="topCenter">
                <ul className="toplist">
                    <li className="toplistitem"><button className="h1"><Link to="/home" className="l4" >HOME</Link></button></li>
                    <li className="toplistitem"><button className="h1"><Link to="/about" className="l4" >ABOUT</Link></button></li>
                    <li className="toplistitem"><button className="h1"><Link to ="/contact" className="l4">CONTACT</Link></button></li>
                    <li className="toplistitem"><button className="h1"><Link to="/write" className="l4" >WRITE</Link></button></li>
                    <li className="toplistitem"><button className="h1"><Link to="/logout" className="l4" >LOGOUT</Link></button></li>
                </ul>
            </div>
                <div className="topRight">
                <Link to="/settings"><img
                className="topImg"
                src={img7} alt="" /></Link>
                
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}


