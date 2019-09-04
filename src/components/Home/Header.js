import React from 'react';
import Hamburger from './Hamburger';

const Header = () => {
    return (
        <div className="header">
            <Hamburger />
            <div className="icons">
                <a href="https://www.facebook.com/maciej.hnat.3" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/maciej-hnat-82203b157/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/mecies" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github-square"></i>
                </a>
            </div>
        </div>
    )
}

export default Header;