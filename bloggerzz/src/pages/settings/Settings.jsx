import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar"
import img5 from "./bg2.jpg"
export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your account
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete account
                    </span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src={img5} alt="" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: 'none'}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Athiban" />
                    <label>email</label>
                    <input type="text" placeholder="athibanodu@student.tce.edu" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}


