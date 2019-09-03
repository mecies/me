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
                        Home
                    </li>
                    <li className="navigation-item">
                        About me
                    </li>
                    <li className="navigation-item">
                        My projects
                    </li>
                    <li className="navigation-item">
                        Contact
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