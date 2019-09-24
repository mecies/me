import React from 'react';
import '../style/App.css'
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import MyProjects from './MyProjects/MyProjects';
import Contact from './Contact/Contact';
import LanguageContext from '../context/LanguageContext';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            language: 'english'
        }

    }

    onLanguageChange = (language) => {
        this.setState({ 
            language: language,
        })
    }

    render() {
        return (
            <div className="app-container">
                <LanguageContext.Provider value={this.state.language}>
                    <Home callback={this.onLanguageChange}/>
                    <MyProjects preview={this.state.previewText}/>
                    <AboutMe />
                    <Contact />
                </LanguageContext.Provider>
            </div>
        )
    }  
}


export default App;