import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../contact/contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_30tgw58', 'template_09g6dk9', formData, 'meyI6MVOcrhST2LUn')
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                alert('Your message has been sent successfully!');
            }, (error) => {
                console.error('Failed to send the email. Error:', error.text);
                alert('Failed to send the message. Please try again.');
            });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        
        <div className="contact">
            <fieldset className="box">
                <div className="title">
                    Contact us
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="e1">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="loginInput" 
                            placeholder="Enter your Full Name" 
                            required 
                        /><br /><br />
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="loginInput" 
                            placeholder="Enter your Email" 
                            required 
                        /> <br /><br />
                        <label>Message</label><br />
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="area loginInput" 
                            placeholder="Enter your Message here" 
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="loginButton send">Send</button>
                </form>
            </fieldset>
        </div>
    );
}
