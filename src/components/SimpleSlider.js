import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show
        };
    }

    renderProps = () => {
        if(this.state.show) {
            this.state.show.map(slide => {
                return (
                    <React.Fragment key={slide.key}>
                        {slide}
                    </React.Fragment>
                )
            })
        }
    }
    
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
                {this.state.show}
            </Slider>
        )
    }
}

export default SimpleSlider;