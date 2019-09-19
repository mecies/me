import React from 'react';
import ContactList from './ContactList';
import ScrollArrow from './ScrollArrow';

class Contact extends React.Component {

    render () {
        return (
            <div id="contactme" className="contact">
                <div className="contactme-logo logo">Contact me</div>
                <div className="contact-details">
                    <div className="details-left">
                        <p className="contact-text">
                            Hey there!<br /> If you want to contact me please select any of the given options or use the built in chat on the website by clicking an icon in the bottom right corner.
                        </p>
                    </div>
                    <div className="details-right">
                        <ContactList />
                    </div>
                </div>  
                <ScrollArrow />
            </div>
        )
    }   
};

export default Contact;