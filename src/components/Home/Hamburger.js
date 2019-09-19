import React from 'react';

class Hamburger extends React.Component {

    handleClick = () => {
        document.querySelector('.hamburger').classList.toggle('active');
        document.querySelector('.navigation').classList.toggle('navigation-active');
    }

    

    render() {
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
                                <span className="nav-span">Home</span>
                            </a>
                        </li>
                        <li className="navigation-item" onClick={this.handleClick}>
                            <a className="nav-anchor" href="#myprojects">
                                <i className="fas fa-folder-open"></i>
                                <span className="nav-span">My projects</span>
                            </a>
                        </li>
                        <li className="navigation-item" onClick={this.handleClick}>
                            <a className="nav-anchor" href="#aboutme">
                                <i className="fas fa-user"></i>
                                <span className="nav-span">About me</span>
                            </a>
                        </li>
                        <li className="navigation-item" onClick={this.handleClick}>
                            <a className="nav-anchor" href="#contactme">
                                <i className="fas fa-envelope"></i>
                                <span className="nav-span">Contact me</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Hamburger;