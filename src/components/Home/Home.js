import React from 'react';
import Header from './Header';
import BigMecies from '../Home/BigMecies';
import Logo from '../Logo';

const Home = ({ callback }) => {
    return (    
        <div className="home-container" id="home">
            <Header callback={callback}/>
            <BigMecies />
            <Logo first="Maciej Hnat" second="" className="home-logo"/>
        </div>
    )
}

export default Home;