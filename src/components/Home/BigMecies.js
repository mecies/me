import React from 'react';

const BigMecies = () => {
    return (
        <div className="image-container" data-aos="fade-in">
            <picture className="image-container">
                <source media="(max-width: 1600px)" srcSet="images/cmaciekbw-medium.png" />
                <source media="(min-width: 1601px)" srcSet="images/cmaciekbw.png" />
                <img className="image" src="images/cmaciekbw-medium.png" alt="Maciej standing with arms crossed" />
            </picture>
        </div>             
    )
}

export default BigMecies;
