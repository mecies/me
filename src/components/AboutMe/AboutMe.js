import React, { useContext } from 'react';
import ImageGallery from './ImageGallery';
import Logo from '../Logo';
import LanguageContext from '../../context/LanguageContext';



const AboutMe = () => {
    const context = useContext(LanguageContext);

    const description = context === 'english' ? {
        logo: "About me",
        firstParagraph: "A web developer located in ",
        city: "Wroclaw",
        dot: ". ",
        secondParagraph: "Currently studying Business Informatics at the ",
        uni: "University of Economics ",
        thirdParagraph: "in Wroclaw",
        fourthParagraph: "Dynamic visual changes keep me passionate about Frontend, however I am leaning towards Fullstack in the future. Besides that I love traveling, art, board & video games and amateur powerlifting."
    } : { 
        logo: "O mnie",
        firstParagraph: "Web developer mieszkający we ",
        city: "Wrocławiu",
        dot: ". ",
        secondParagraph: "Aktualnie studiuję Business Informatics na ",
        uni: "Uniwersytecie Ekonomicznym ",
        thirdParagraph: "we Wrocławiu",
        fourthParagraph: "Dynamiczne zmiany wizualne sprawiają, że pasjonuję się Frontendem, jednak w przyszłości skłaniam się ku Fullstack'owi. Poza tym uwielbiam podróże, sztukę, gry planszowe i wideo oraz amatorski trójbój siłowy."
    };

    return (
            <div className="aboutme" id="aboutme">
                <div className="aboutme-left">
                    <Logo first={description.logo} second="" className="aboutme-logo"/>
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