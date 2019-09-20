import React from 'react';
import ContactList from './ContactList';
import ScrollArrow from './ScrollArrow';
import Logo from '../Home/Logo'

class Contact extends React.Component {

    render () {
        return (
            <div id="contactme" className="contact">
                <Logo first="Contact me" second ="" className="contactme-logo"/>    
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