import React from 'react';
import ImageGallery from './ImageGallery';

const AboutMe = () => {
    return (
        <div className="aboutme">
            <div className="aboutme-left">
                <div className="aboutme-logo logo">
                    <p>About me</p>
                </div>
                <p className="aboutme-description">
                    A web developer from Sanok. <br /> Currently located and studying Business Informatics at the University of Economics in Wrocław. <b />
                    Dynamic visual changes keep me passionate about Frontend, however I am leaning towards Fullstack in the future. 
                </p>
            </div>
            <ImageGallery />
        </div>
    )
}

export default AboutMe;