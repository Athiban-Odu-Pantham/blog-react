import "./post.css";
import { Link } from "react-router-dom";
import img1 from "./bg1.jpg";

export default function Post() {
    return (
        <div className="post">
            <Link to="/post1" className="postLink">
                <img className="postImg" src={img1} alt="" />
                </Link>
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">Music</span>
                        <span className="postCat">Life</span>
                    </div>
                    <span className="postTitle">
                        Music is the pleasant sound from a combination of melodies, harmony, instruments, and vocals that soothes you.
                    </span>
                    <hr/>
                    <span className="postDate">30 mins ago</span>
                </div>
                <p className="postDesc">
                    Music is the pleasant sound from a combination of melodies, harmony, instruments, and vocals that soothes you. It is a form of art and has existed since the dawn of human civilization...
                </p>
            
        </div>
    );
}
