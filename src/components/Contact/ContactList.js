import React from 'react';

const ContactList = () => {
    return (
        <ul className="contact-list">
            <li className="contact-item">
                <a href='mailto:maciekhnat@gmail.com'>
                    <i className="fas fa-envelope-square"></i><span>Send me an email</span>
                </a>
            </li>
            <li className="contact-item">
                <a href="https://github.com/mecies" target="_blank" rel="noopener noreferrer"> 
                    <i className="fab fa-github-square"></i><span>Github</span>
                </a>
            </li>
            <li className="contact-item">
                <a href="https://www.linkedin.com/in/maciej-hnat-82203b157/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i><span>LinkedIn</span>
                </a>
            </li>
            <li className="contact-item">
                <a href="https://www.facebook.com/maciej.hnat.3" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-square"></i><span>Facebook</span>
                </a>
            </li>
            
        </ul>
    )
}

export default ContactList;