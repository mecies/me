import React from 'react';

const ContactList = () => {
    return (
        <ul className="contact-list">
            <li className="contact-item">
                <i class="fas fa-envelope-square"></i><span>maciekhnat@gmail.com</span>
            </li>
            <li className="contact-item">
                <i className="fab fa-github-square"></i><span>github.com/mecies</span>
            </li>
            <li>
                <i class="fab fa-linkedin"></i><span>linkedin</span>
            </li>
            <li className="contact-item">
                <i class="fab fa-facebook-square"></i><span>facebook</span>
            </li>
            
        </ul>
    )
}

export default ContactList;