import "./post2.css"
import img2 from './bg2.webp'
import { Link } from "react-router-dom";
export default function Post () {
    return (
        <div className="post2">
            <Link to="/post2" className="l6">
            <img className="postImg" src={img2} alt="" />
            </Link>
            <div className="postInfo">
                <div className="postCats"><br/>
                <div className="postCat">Karate</div>
            </div>
            <div className="postTitle">
            I took up karate in my late 40s
            </div>
            <hr />
            <span className="postDate">30mins ago</span>
            </div>
            <p className="postDesc"><br/>
            The other night I fought four teenagers. One threw a punch, another grabbed my shoulders, a third put hands around my throat and  the last one came at me <br/> with a club. With Miyagi-esque reflexes I met each aggression with memorized defense techniques punctuated with a confident: HI-yah!

That’s how the<br/> test of my white belt karate skills was supposed to go.

Some of the more advanced students, the ones choking me and so forth, have parents who are<br/> younger than me. In real life,<br/> during this afore-described sequence,<br/> I flubbed most of the choreographed attack responses, and I apologized out loud (I’m sorry … omygosh, sorry, oops, sorry) <br/>to each of the kids as I halfheartedly kicked and chopped at them.

Also, my HI-yah was barely audible<br/> (definitely not followed by an exclamation mark).<br/>

With humiliating formality, <br/>

            </p>
        </div>
    );
}


