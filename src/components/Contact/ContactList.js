import React from 'react';

const ContactList = ({ email }) => {
    return (
        <ul className="contact-list">
            <li className="contact-item">
                <a href='mailto:maciekhnat@gmail.com'>
                    <span>{email}</span><i className="fas fa-envelope-square"></i>
                </a>
            </li>
            <li className="contact-item">
                <a href="https://github.com/mecies" target="_blank" rel="noopener noreferrer"> 
                    <span>Github</span><i className="fab fa-github-square"></i>
                </a>
            </li>
            <li className="contact-item">
                <a href="https://www.linkedin.com/in/maciej-hnat-82203b157/" target="_blank" rel="noopener noreferrer">
                    <span>LinkedIn</span><i className="fab fa-linkedin"></i>
                </a>
            </li>
            <li className="contact-item">
                <a href="https://m.me/maciej.hnat.3" target="_blank" rel="noopener noreferrer">
                    <span>Messenger</span><i className="fab fa-facebook-messenger"></i>
                </a>
            </li>
        </ul>
    )
}

export default ContactList;