import React from 'react';
import SimpleSlider from '../SimpleSlider';

class ImageGallery extends React.Component {

    renderImages = () => {
        return (
            [   
                <div className="image-container" key="img3">
                    <img className="gal-image" src="images/garden.jpg" alt="placeholder" />
                </div>,
                <div className="image-container" key="img1">
                    <img className="gal-image" src="images/clouds.jpg" alt="clouds" />
                </div>,
                <div className="image-container" key="img2">
                    <img className="gal-image" src="images/hangin.jpg" alt="placeholder" />
                </div>
            ]
        )
    }

    render() {
        return (
            <div className="image-gallery">
                <img className="gal-image one" src="images/clouds.jpg" alt="landscape of bieszczady mountains" />
                <img className="gal-image two" src="images/hangin.jpg" alt="me and piece of art" />
                <img className="gal-image three" src="images/garden.jpg" alt="me in the garden" />
                <div className="slider-container">
                    <SimpleSlider show={this.renderImages()} />
                </div>
            </div>
        )
    }
    
}


export default ImageGallery;