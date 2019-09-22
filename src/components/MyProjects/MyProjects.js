import React from 'react';
import ProjectList from './ProjectList';
import Preview from './Preview';
import Logo from '../Logo';
import SimpleSlider from '../SimpleSlider';
import projectDescription from './projectDescription';

class MyProjects extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            previewContent: {
                title: 'Click on a project',
                solution: 'My contribution to the project'
            },
            sliderContent: projectDescription
        }
    }

    updatePreview(previewContent) {
        this.setState({
            previewContent
        })
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

    renderProjects() {
        return [
            <div key="1" className="project-list-item mobile" onClick={() => this.onProjectClick(this.state.sliderContent.One)}>
                <p className="title">Native Speaker</p>
                <img className="proj-img" src="images/native-speaker.png" alt="native speaker project screenshot" />
                <div className="test">
                    <div className="prev-icons">
                        <span>Code: <i className="fas fa-dollar-sign"></i></span>
                        <a href={this.state.sliderContent.One.live} target="_blank" rel="noopener noreferrer">Live: <i className="fas fa-window-maximize"></i></a>
                    </div>
                    <p className="white-rec">
                        {this.state.sliderContent.One.solution}
                    </p>
                </div>
            </div>,
            <div key="2" className="project-list-item mobile" onClick={() => this.onProjectClick(this.state.sliderContent.Two)}>
                <p className="title">Portfolio</p>
                <img className="proj-img" src="images/portfolio.png" alt="portfolio project screenshot" />
                <div className="test">
                    <div className="prev-icons">
                        <a href={this.state.sliderContent.Two.code} target="_blank" rel="noopener noreferrer">Code: <i className="fas fa-code"></i></a>
                        <a href={this.state.sliderContent.Two.live} target="_blank" rel="noopener noreferrer">Live: <i className="fas fa-window-maximize"></i></a>
                    </div>
                    <p className="white-rec">
                        {this.state.sliderContent.Two.solution}
                    </p>
                </div>
            </div>,
            <div key="3" className="project-list-item mobile" onClick={() => this.onProjectClick(this.state.sliderContent.Three)}>
                <p className="title">Equarium</p>
                <img className="proj-img" src="images/equarium.png" alt="equarium project screenshot" />
                <div className="test">
                    <div className="prev-icons">
                        <a href={this.state.sliderContent.Three.code} target="_blank" rel="noopener noreferrer">Code: <i className="fas fa-code"></i></a>
                        <a href={this.state.sliderContent.Three.live} target="_blank" rel="noopener noreferrer">Live: <i className="fas fa-window-maximize"></i></a>
                    </div>
                    <p className="white-rec">
                        {this.state.sliderContent.Three.solution}
                    </p>
                </div>
            </div>,
            <div key="4" className="project-list-item mobile" onClick={() => this.onProjectClick(this.state.sliderContent.Four)}>
                <p className="title">Weather App</p>
                <img className="proj-img" src="images/weather.png" alt="weather project screenshot" />
                <div className="test">
                    <div className="prev-icons">
                        <a href={this.state.sliderContent.Four.code} target="_blank" rel="noopener noreferrer">Code: <i className="fas fa-code"></i></a>
                        <a href={this.state.sliderContent.Four.live} target="_blank" rel="noopener noreferrer">Live: <i className="fas fa-window-maximize"></i></a>
                    </div>
                    <p className="white-rec">
                        {this.state.sliderContent.Four.solution}
                    </p>
                </div>
            </div>
        ]
    }
    
    render() {
        return (
            <div className="container" id="myprojects">
                <div className="my-projects">
                    <div className="my-projects-logo-container">
                        <Logo first="My projects" second="" className="my-projects-logo" />
                    </div>
                    <div className="my-projects-bottom">
                        <ProjectList onProjectClick={this.onProjectClick} />
                        <Preview previewContent={this.state.previewContent} />
                        <div className="slider-container">
                            <SimpleSlider show={this.renderProjects()} updatePreview={this.updatePreview} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default MyProjects;