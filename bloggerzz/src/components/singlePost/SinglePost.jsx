import "./singlePost.css"
import "../post/Post"
import img2 from "./bg1.jpg"
export default function SinglePost(){
    return (
        <div className="singlepost">
            <div className="singlePostWrapper">
                <img  className="singlePostImg" src={img2} alt="" />
                <h1 className="singlePostTitle">
                Music is the pleasant sound 
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i class="singlePostIcon fa-solid fa-trash"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostInfo">
                        Author: <b>Athiban</b>
                    </span>
                    <span className="singlePostDate">
                        1 hour ago
                    </span>
                </div>
                <div className="singlePostDesc">
                <p>
                “Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.” — Kahlil Gibran.

It is rightly said in the above lines, capturing the true essence of music. Music is the language of the spirit - the human soul. It is the key to peace. In the past, music has often been seen as a way to unite nations. People from different classes and sections enjoy the same music even if they don’t understand the lyrics.

What Is Music?
Music is the simple and soothing combination of different instruments, sometimes aided by singers' vocals. It is one of the earliest art forms used by humans to display their emotions. Music has often been associated with happiness and joy in ancient times, but in the present-day - music is used to convey all kinds of emotions - joy, rage, sadness, anger and has been successful in doing so.

Power of Music
Music is often attributed to having the power to heal people mentally and physically. While listening to music, a person gets into his comfort zone and forgets his worries and problems for some time. It has also been proven that even plants grow faster when they are in the presence of music. Music has the power to change human emotions.

Different Kinds Of Music
Over time, we have developed many kinds of music according to different cultures and societal norms. Yet there are many kinds of music, but no one kind is restrained to just a particular group of people. From time to time, different types of music forms have transcended man-made boundaries and become a global phenomenon. India has been a culturally rich country. Music is an essential part of Indian history. Since ancient times different tribal groups in India have had their specific type of music. The literature composed at that time was also meant to be sung.

Music As A Career -
Music has a lot of potential for those who are talented at it. True talent is always acknowledged; thus, if someone is a skilled musician, he or she may use it as a fantastic job chance. If one has an interest in pursuing music as a career, he can get admission himself to music academies and train himself in any genre of music.

He can also start his own Youtube channel or Instagram page to showcase his talent in music. Successful musicians such as Arijit Singh or A.R Rehman generate considerable money and fame. Thus, music is an excellent career choice, though the scope to reach the topmost is less competitive. If one has full confidence in his skills, he should try his best.

My Favourite Music
My favourite songs are the ones composed by Lata Mangeshkar. She was a classical musician and one of the prominent playback singers and composers of modern Indian history. She is known as the Nightingale of India. Whenever I am stressed, I listen to the classical playlist of Lata Mangeshkar. It calms me down and has a very soothing effect on me. I also love the patriotic songs sung by her. She is a true inspiration and idol to me.
                </p>
                </div>
            </div>
        </div>
    );
}

