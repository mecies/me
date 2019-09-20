import React from 'react';
import SimpleSlider from '../SimpleSlider';

class ImageGallery extends React.Component {

    renderImages = () => {
        return (
            [
                <div className="image-container" key="img1">
                    <img className="gal-image" src="images/img_gal.jpg" alt="placeholder" />
                </div>,
                <div className="image-container" key="img2">
                    <img className="gal-image" src="images/img_gal.jpg" alt="placeholder" />
                </div>,
                <div className="image-container" key="img3">
                    <img className="gal-image" src="images/img_gal.jpg" alt="placeholder" />
                </div>
            ]
        )
    }

    render() {
        return (
            <div className="image-gallery">
                <img className="gal-image one" src="images/img_gal.jpg" alt="placeholder" />
                <img className="gal-image two" src="images/img_gal.jpg" alt="placeholder" />
                <img className="gal-image three" src="images/img_gal.jpg" alt="placeholder" />
                <div className="slider-container">
                    <SimpleSlider show={this.renderImages()} />
                </div>
            </div>
        )
    }
    
}


export default ImageGallery;