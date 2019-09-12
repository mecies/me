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
                        A web developer located in <a href="https://www.wroclaw.pl/" target="_blank" rel="noopener noreferrer">Wrocław</a>. <br />
                        Currently studying Business Informatics at the <a href="http://www.ue.wroc.pl/" target="_blank" rel="noopener noreferrer">University of Economics</a> in Wrocław. <b />
                        Dynamic visual changes keep me passionate about Frontend, however I am leaning towards Fullstack in the future.
                </p>
                </div>
                <ImageGallery />
            </div>
    )
}

export default AboutMe;