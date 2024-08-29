import '../contact/contact.css';

export default function Contact() {
    return (
        <div className="contact">
            <fieldset className="box">
                <div className="title">
                    Contact us
                </div>
                <form>
                    <div className="e1">
                        <label>Name</label>
                        <input type="text" className="loginInput" id="e1" placeholder="Enter your Full Name" /><br /><br />
                        <label>Email</label>
                        <input type="email" className="loginInput" placeholder="Enter your Email" /> <br /><br />
                        <label>Message</label><br />
                        <textarea className="area loginInput" placeholder="Enter your Message here"></textarea>
                    </div>
                    <button className="loginButton send">Send</button>
                </form>
            </fieldset>
        </div>
    );
}
