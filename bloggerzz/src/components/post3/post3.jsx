import "./post3.css";
import img1 from "./bg5.webp"
import { Link } from "react-router-dom";
export default function post3(){
    return (
        <div className="post3">
            <Link to="/post3" className="l7">
            <img className="postImg" src={img1} alt="" />
            </Link>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Tech</span>
                    </div>
                <span className="postTitle">
                Bye-bye ChatGPT
                </span>
                <hr/>
                <span className="postDate">30 mins ago</span>
            </div>
            <p className="postDesc">
            Over the past months, ChatGPT
            has gained a lot of
            users because<br/> it’s so good
            at writing emails, blogs, code, 
            and more. However, there<br/> are other
            tools that use the model
            behind ChatGPT to go beyond<br/> 
            what ChatGPT can do.
            <br/>
            dshdtths
            
            </p>
        </div>
    );
}


 