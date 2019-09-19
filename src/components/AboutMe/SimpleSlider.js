import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends React.Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div className="image-container">
                    <img className="gal-image" src="images/img_gal.jpg" alt="placeholder" />
                </div>
                <div className="image-container">
                    <img className="gal-image" src="images/img_gal.jpg" alt="placeholder" />
                </div>
                <div className="image-container">
                    <img className="gal-image" src="images/img_gal.jpg" alt="placeholder" />
                </div>
            </Slider>
        );
    }
}

export default SimpleSlider;