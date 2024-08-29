import Post from "../post/Post"
import Post2 from "../post2/Post2"
import Post3 from "../post3/post3";
import './posts.css';

export default function Posts() {
    return (
        <div className="posts">
            <Post />
            <Post2 />
            <Post3 />
        </div>
    );
}


