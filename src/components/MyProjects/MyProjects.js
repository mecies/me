import React from 'react';
import ProjectList from './ProjectList';
import Preview from './Preview';
import Logo from '../Logo';
import SimpleSlider from '../SimpleSlider';
import projectDescription from './projectDescription';

import LanguageContext from '../../context/LanguageContext';

class MyProjects extends React.Component {

    static contextType = LanguageContext;

    constructor(props) {
        super(props);

        this.state = {
            previewContent: {
                title: projectDescription.default.title,
                solution: projectDescription.default.solution,
            },
            sliderContent: projectDescription,
            language: 'english'
        }
    }

    onProjectClick = (previewContent) => {
        this.setState({
            previewContent: {
                title: previewContent.title,
                solution: previewContent.solution,
                code: previewContent.code,
                live: previewContent.live
            }
        })
    }

    componentDidUpdate() {
        if (this.context === "polish" && this.context !== this.state.language) {
            this.setState({
                previewContent: {
                    title: projectDescription.defaultPL.title,
                    solution: projectDescription.defaultPL.solution,
                },
                language: 'polish'
            })
        } else if (this.context === "english" && this.context !== this.state.language) {
            this.setState({
                previewContent: {
                    title: projectDescription.default.title,
                    solution: projectDescription.default.solution,
                },
                language: 'english'
            })      
        }
    }

    renderProjectsENG = () => {
        const content = this.state.sliderContent
        
        return [
            <div key="1" className="project-list-item mobile">
                <p className="title">{content.One.title}</p>
                <img className="proj-img" src="images/native-speaker.png" alt="native speaker project screenshot" />
                <div className="test">
                    <div className="prev-icons">
                        <span>Code: <i className="fas fa-dollar-sign"></i></span>
                        <a href={content.One.live} target="_blank" rel="noopener noreferrer">Live: <i className="fas fa-window-maximize"></i></a>
                    </div>
                    <p className="white-rec">
                        {content.One.solution}
                    </p>
                </div>
            </div>,
            <div key="2" className="project-list-item mobile">
                <p className="title">{content.Two.title}</p>
                <img className="proj-img" src="images/portfolio.png" alt="portfolio project screenshot" />
                <div className="test">
                    <div className="prev-icons">
                        <a href={content.Two.code} target="_blank" rel="noopener noreferrer">Code: <i className="fas fa-code"></i></a>
                        <a href={content.Two.live} target="_blank" rel="noopener noreferrer">Live: <i className="fas fa-window-maximize"></i></a>
                    </div>
                    <p className="white-rec">
                        {content.Two.solution}
                    </p>
                </div>
            </div>,
            <div key="3" className="project-list-item mobile">
                <p className="title">{content.Three.title}</p>
                <img className="proj-img" src="images/equarium.png" alt="equarium project screenshot" />
                <div className="test">
                    <div className="prev-icons">
                        <a href={content.Three.code} target="_blank" rel="noopener noreferrer">Code: <i className="fas fa-code"></i></a>
                        <a href={content.Three.live} target="_blank" rel="noopener noreferrer">Live: <i className="fas fa-window-maximize"></i></a>
                    </div>
                    <p className="white-rec">
                        {content.Three.solution}
                    </p>
                </div>
            </div>,
            <div key="4" className="project-list-item mobile">
                <p className="title">{content.Four.title}</p>
                <img className="proj-img" src="images/weather.png" alt="weather project screenshot" />
                <div className="test">
                    <div className="prev-icons">
                        <a href={content.Four.code} target="_blank" rel="noopener noreferrer">Code: <i className="fas fa-code"></i></a>
                        <a href={content.Four.live} target="_blank" rel="noopener noreferrer">Live: <i className="fas fa-window-maximize"></i></a>
                    </div>
                    <p className="white-rec">
                        {content.Four.solution}
                    </p>
                </div>
            </div>
        ]
    }

    renderProjectsPL = () => {
        const content = this.state.sliderContent

        return [
            <div key="1" className="project-list-item mobile">
                <p className="title">{content.OnePL.title}</p>
                <img className="proj-img" src="images/native-speaker.png" alt="native speaker project screenshot" />
                <div className="test">
                    <div className="prev-icons">
                        <span>Kod: <i className="fas fa-dollar-sign"></i></span>
                        <a href={content.OnePL.live} target="_blank" rel="noopener noreferrer">Na żywo: <i className="fas fa-window-maximize"></i></a>
                    </div>
                    <p className="white-rec">
                        {content.OnePL.solution}
                    </p>
                </div>
            </div>,
            <div key="2" className="project-list-item mobile">
                <p className="title">{content.TwoPL.title}</p>
                <img className="proj-img" src="images/portfolio.png" alt="portfolio project screenshot" />
                <div className="test">
                    <div className="prev-icons">
                        <a href={content.TwoPL.code} target="_blank" rel="noopener noreferrer">Kod: <i className="fas fa-code"></i></a>
                        <a href={content.TwoPL.live} target="_blank" rel="noopener noreferrer">Na żywo:  <i className="fas fa-window-maximize"></i></a>
                    </div>
                    <p className="white-rec">
                        {content.TwoPL.solution}
                    </p>
                </div>
            </div>,
            <div key="3" className="project-list-item mobile">
                <p className="title">{content.ThreePL.title}</p>
                <img className="proj-img" src="images/equarium.png" alt="equarium project screenshot" />
                <div className="test">
                    <div className="prev-icons">
                        <a href={content.ThreePL.code} target="_blank" rel="noopener noreferrer">Kod: <i className="fas fa-code"></i></a>
                        <a href={content.ThreePL.live} target="_blank" rel="noopener noreferrer">Na żywo:  <i className="fas fa-window-maximize"></i></a>
                    </div>
                    <p className="white-rec">
                        {content.ThreePL.solution}
                    </p>
                </div>
            </div>,
            <div key="4" className="project-list-item mobile">
                <p className="title">{content.FourPL.title}</p>
                <img className="proj-img" src="images/weather.png" alt="weather project screenshot" />
                <div className="test">
                    <div className="prev-icons">
                        <a href={content.FourPL.code} target="_blank" rel="noopener noreferrer">Kod: <i className="fas fa-code"></i></a>
                        <a href={content.FourPL.live} target="_blank" rel="noopener noreferrer">Na żywo: <i className="fas fa-window-maximize"></i></a>
                    </div>
                    <p className="white-rec">
                        {content.FourPL.solution}
                    </p>
                </div>
            </div>
        ]
    }

    render() { 
        
        const projectsText = this.context === "english" ? {
            preview: {
                projectIdea: "Have a cool project idea? ",
                link: "Contact me",
                code: "Code",
                live: "Live"
            },
            logo: "My projects",
        } : {
            preview: {
                projectIdea: "Masz pomysł na ciekawy projekt? ",
                link: "Skontaktuj się ze mną",
                code: "Kod",
                live: "Na żywo"

            },
            logo: "Projekty",
        };

        return (
            <div className="container" id="myprojects">
                <div className="my-projects">
                    <div className="my-projects-logo-container">
                        <Logo first={projectsText.logo} second="" className="my-projects-logo" />
                    </div>
                    <div className="my-projects-bottom">
                        <ProjectList onProjectClick={this.onProjectClick} />
                        <Preview previewContent={this.state.previewContent} previewText={projectsText.preview}/>
                        <div className="slider-container">
                            <SimpleSlider show={this.state.language === "english" ? this.renderProjectsENG() : this.renderProjectsPL()}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default MyProjects;