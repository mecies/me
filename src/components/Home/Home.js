import React from 'react';
import Header from './Header';
import BigMecies from '../Home/BigMecies';
import Logo from './Logo.js'
import SpiralArrow from './SpiralArrow';

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <BigMecies />
            <Logo />
            <SpiralArrow />
        </div>
    )
}

export default Home;