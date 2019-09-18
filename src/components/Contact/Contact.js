import React from 'react';
import ContactList from './ContactList';

class Contact extends React.Component {

    scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        console.log('clicked')
    }

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
                <i id ="drag-top" className="drag-top fas fa-caret-up" onClick={this.scrollToTop}></i>
            </div>
        )
    }   
};

export default Contact;