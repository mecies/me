import React from 'react';
import '../style/App.css'
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';

const App = () => {
    return (
        <div className="app-container">
            <Home />
            <AboutMe />
        </div>
    )
}

export default App;