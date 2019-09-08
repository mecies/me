import React from 'react';
import '../style/App.css'
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import MyProjects from './MyProjects/MyProjects';

const App = () => {
    return (
        <div className="app-container">
            <Home/>
            <AboutMe/>
            <MyProjects />
        </div>
    )
}

export default App;