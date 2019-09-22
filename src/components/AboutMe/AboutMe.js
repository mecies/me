import React from 'react';
import ImageGallery from './ImageGallery';
import Logo from '../Logo';

const AboutMe = () => {
    return (
            <div className="aboutme" id="aboutme">
                <div className="aboutme-left">
                    <Logo first="About me" second="" className="aboutme-logo"/>
                    <p className="aboutme-description">
                        A web developer located in <a href="https://www.wroclaw.pl/" target="_blank" rel="noopener noreferrer">Wroclaw</a>.
                        Currently studying Business Informatics at the <a href="http://www.ue.wroc.pl/" target="_blank" rel="noopener noreferrer">University of Economics</a> in Wroclaw. <b />
                        Dynamic visual changes keep me passionate about Frontend, however I am leaning towards Fullstack in the future.
                        Besides that I love traveling, art, board & video games and amateur powerlifting.
                </p>
                </div>
                <ImageGallery />
            </div>
    )
}

export default AboutMe;