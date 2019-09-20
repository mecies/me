import React from 'react';
import Header from './Header';
import BigMecies from '../Home/BigMecies';
import Logo from '../Logo';

const Home = () => {
    return (
        <div className="home-container" id="home">
            <Header/>
            <BigMecies />
            <Logo first="Maciej Hnat" second="" className="home-logo"/>
        </div>
    )
}

export default Home;