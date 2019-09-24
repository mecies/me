import React from 'react';
import ContactList from './ContactList';
import ScrollArrow from './ScrollArrow';
import Logo from '../Logo'
import LanguageContext from '../../context/LanguageContext';

class Contact extends React.Component {
    static contextType = LanguageContext;

    render () {
        const contactText = this.context === "english" ? {
            logo: "Contact me",
            email: "Send me an email",
            firstParahraph: "Hey there!",
            secondParagraph: "If you want to contact me please select any of the given options or use the built in chat on the website by clicking an icon in the bottom right corner."
        } : {
            logo: "Kontakt",
            email: "Wyślij mi maila",
            firstParahraph: "Witaj!",
            secondParagraph: "Jeśli chcesz się ze mną skontaktować, wybierz jedną z podanych opcji lub skorzystaj z wbudowanego czatu na stronie, klikając ikonę w prawym dolnym rogu."
        };

        return (
            <div id="contactme" className="contact">
                <div className="logo-container">
                    <Logo first={contactText.logo} second="" className="contactme-logo" />
                </div>
                <div className="contact-details">
                    <div className="details-left">
                        <p className="contact-text">
                            {contactText.firstParahraph}<br />
                            {contactText.secondParagraph}
                        </p>
                    </div>
                    <div className="details-right">
                        <ContactList email={contactText.email}/>
                    </div>
                </div>  
                <ScrollArrow />
            </div>
        )
    }   
};

export default Contact;