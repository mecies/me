import React from 'react';
import SimpleSlider from './SimpleSlider';

const ImageGallery = () => {
    return (
        <div className="image-gallery"> 
            <img className="gal-image one" src="images/img_gal.jpg" alt="placeholder" />
            <img className="gal-image two" src="images/img_gal.jpg" alt="placeholder" />
            <img className="gal-image three" src="images/img_gal.jpg" alt="placeholder" />
            <div className="slider-container">
                <SimpleSlider />
            </div>
        </div>
    )
}

export default ImageGallery;