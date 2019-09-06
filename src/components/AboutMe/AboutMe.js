import React from 'react';
import ImageGallery from './ImageGallery';

const AboutMe = () => {
    return (
        <div className="aboutme" id="aboutme">
            <div className="aboutme-left">
                <div className="aboutme-logo logo">
                    <p>About me</p>
                </div>
                <p className="aboutme-description">
                    A web developer from <a href="https://pl.wikipedia.org/wiki/Sanok" target="_blank" rel="noopener noreferrer">Sanok</a>. <br /> 
                    Currently located and studying Business Informatics at the <a href="http://www.ue.wroc.pl/" target="_blank" rel="noopener noreferrer">University of Economics</a> in Wrocław. <b />
                    Dynamic visual changes keep me passionate about Frontend, however I am leaning towards Fullstack in the future. 
                </p>
            </div>
            <ImageGallery />
        </div>
    )
}

export default AboutMe;