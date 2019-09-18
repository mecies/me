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
            <div className="contact">
                <div className="contact-details">
                    <div className="details-left">
                        <ContactList />
                    </div>
                    <div className="details-right">
                        right
                    </div>
                </div>  
                <i id ="drag-top" className="drag-top fas fa-caret-up" onClick={this.scrollToTop}></i>
            </div>
        )
    }   
};

export default Contact;