import React from 'react';

const Header = () => {
    return (
        <div className="header">
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
                        <i class="fas fa-home"></i>
                        <span>Home</span>
                    </li>
                    <li className="navigation-item">
                        <i class="fas fa-user"></i>
                        <span>About me</span>
                    </li>
                    <li className="navigation-item">
                        <i class="fas fa-folder-open"></i>
                        <span>My projects</span>
                    </li>
                    <li className="navigation-item">
                        <i class="fas fa-envelope"></i>
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

export default Header;