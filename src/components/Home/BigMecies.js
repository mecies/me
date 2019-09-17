import React from 'react';

const BigMecies = () => {
    return (
        <div className="image-container">
            <picture className="image-container">
                <source srcSet="images/cmaciekbw.png"
                    media="(min-width: 800px)" />
                <img className="image" src="images/cmaciekbw.png" alt="Maciej Hnat's photograph" />
            </picture>
        </div>             
    )
}

export default BigMecies;
