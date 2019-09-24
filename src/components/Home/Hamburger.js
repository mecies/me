import React from 'react';
import LanguageContext from '../../context/LanguageContext';

class Hamburger extends React.Component {
    static contextType = LanguageContext;

    handleClick = () => {
        document.querySelector('.hamburger').classList.toggle('active');
        document.querySelector('.navigation').classList.toggle('navigation-active');
    }

    render() {
        const menuText = this.context === 'english' ? { Home: 'Home', Myprojects: 'My projects', Aboutme: 'About me', Contactme: 'Contact me' } : 
            { Home: 'Główna', Myprojects: 'Projekty', Aboutme: 'O mnie', Contactme: 'Kontakt' };

        return (
            <div>
                <div className="hamburger" onClick={this.handleClick}>
                    <div className="hamburger-box">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>
                </div>
                <nav className="navigation">
                    <ul className="navigation-list">
                        <li className="navigation-item" onClick={this.handleClick}>
                            <a className="nav-anchor" href="#home">
                                <i className="fas fa-home"></i>
                                <span className="nav-span">{menuText.Home}</span>
                            </a>
                        </li>
                        <li className="navigation-item" onClick={this.handleClick}>
                            <a className="nav-anchor" href="#myprojects">
                                <i className="fas fa-folder-open"></i>
                                <span className="nav-span">{menuText.Myprojects}</span>
                            </a>
                        </li>
                        <li className="navigation-item" onClick={this.handleClick}>
                            <a className="nav-anchor" href="#aboutme">
                                <i className="fas fa-user"></i>
                                <span className="nav-span">{menuText.Aboutme}</span>
                            </a>
                        </li>
                        <li className="navigation-item" onClick={this.handleClick}>
                            <a className="nav-anchor" href="#contactme">
                                <i className="fas fa-envelope"></i>
                                <span className="nav-span">{menuText.Contactme}</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Hamburger;