import React from 'react';
import Header from './Header';
import BigMecies from '../Home/BigMecies';
import Logo from './Logo';

const Home = () => {
    return (
        <div className="home-container" id="home">
            <Header/>
            <BigMecies />
            <Logo />
        </div>
    )
}

export default Home;