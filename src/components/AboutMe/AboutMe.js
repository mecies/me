import React, { useContext } from 'react';
import ImageGallery from './ImageGallery';
import Logo from '../Logo';
import LanguageContext from '../../context/LanguageContext';



const AboutMe = () => {
    const context = useContext(LanguageContext);

    const description = context === 'english' ? {
        firstParagraph: "A web developer located in ",
        city: "Wroclaw",
        dot: ". ",
        secondParagraph: "Currently studying Business Informatics at the ",
        uni: "University of Economics ",
        thirdParagraph: "in Wroclaw",
        fourthParagraph: "Dynamic visual changes keep me passionate about Frontend, however I am leaning towards Fullstack in the future. Besides that I love traveling, art, board & video games and amateur powerlifting."
    } : { 
        firstParagraph: "A web developer located in ",
        city: "Wroclaw",
        dot: ". ",
        secondParagraph: "Currently studying Business Informatics at the ",
        uni: "University of Economics ",
        thirdParagraph: "in Wroclaw",
        fourthParagraph: "Dy"
    };

    return (
            <div className="aboutme" id="aboutme">
                <div className="aboutme-left">
                    <Logo first="About me" second="" className="aboutme-logo"/>
                    <p className="aboutme-description">
                        {description.firstParagraph} <a href="https://www.wroclaw.pl/" target="_blank" rel="noopener noreferrer">{description.city}</a>{description.dot}
                    {description.secondParagraph} <a href="http://www.ue.wroc.pl/" target="_blank" rel="noopener noreferrer">{description.uni}</a>{description.thirdParagraph + description.dot}<b />
                        {description.fourthParagraph}
                </p>
                </div>
                <ImageGallery />
            </div>
    )
}

export default AboutMe;