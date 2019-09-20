import React from 'react';
import '../style/App.css'
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import MyProjects from './MyProjects/MyProjects';
import Contact from './Contact/Contact';

const App = () => {
    return (
        <div className="app-container">
            <Home/>
            {/* <MyProjects /> */}
            <AboutMe/>
            <Contact />
        </div>
    )
}


export default App;