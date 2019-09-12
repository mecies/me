import React from 'react';

const Hamburger = () => {
    return (
        <div>
            <div className="hamburger" onClick={handleClick}>
                <div className="hamburger-box">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </div>
            </div>
            <nav className="navigation">
                <ul className="navigation-list">
                    <li className="navigation-item">
                        <i className="fas fa-home"></i>
                        <a href="#home">Home</a>
                    </li>
                    <li className="navigation-item">
                        <i className="fas fa-user"></i>
                        <a href="#aboutme">About me</a>
                    </li>
                    <li className="navigation-item">
                        <i className="fas fa-folder-open"></i>
                        <a href="#myprojects">My projects</a>
                    </li>
                    <li className="navigation-item">
                        <i className="fas fa-envelope"></i>
                        <span>Contact me</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

const handleClick = () => {
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('navigation-active');
}

export default Hamburger;