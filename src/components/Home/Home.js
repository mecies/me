import React, { useContext } from 'react';
import Header from './Header';
import BigMecies from '../Home/BigMecies';
import Logo from '../Logo';

const Home = ({ language, callback }) => {
    return (    
        <div className="home-container" id="home">
            <Header language={language} callback={callback}/>
            <BigMecies />
            <Logo first="Maciej Hnat" second="" className="home-logo"/>
        </div>
    )
}

export default Home;