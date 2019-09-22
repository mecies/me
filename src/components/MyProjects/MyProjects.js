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
                title: 'Select a project',
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
                solution: previewContent.solution
            }
        })
    }

    renderProjects() {
        return [
            <div key="1" className="project-list-item mobile" onClick={() => this.onProjectClick(this.state.sliderContent.One)}>
                <p className="title">Native Speaker</p>
                <img className="proj-img" src="images/garden.jpg" alt="placeholder" />
                <div className="test">
                    <div className="prev-icons">
                        <span>Code: <i className="fas fa-dollar-sign"></i></span>
                        <span>Live: <i className="fas fa-window-maximize"></i></span>
                    </div>
                    <p className="white-rec">
                        {this.state.sliderContent.One.solution}
                    </p>
                </div>
            </div>,
            <div key="2" className="project-list-item mobile" onClick={() => this.onProjectClick(this.state.sliderContent.Two)}>
                <p className="title">Portfolio</p>
                <img className="proj-img" src="images/garden.jpg" alt="placeholder" />
                <div className="test">
                    <div className="prev-icons">
                        <span>Code: <i className="fas fa-code"></i></span>
                        <span>Live: <i className="fas fa-window-maximize"></i></span>
                    </div>
                    <p className="white-rec">
                        {this.state.sliderContent.Two.solution}
                    </p>
                </div>
            </div>,
            <div key="3" className="project-list-item mobile" onClick={() => this.onProjectClick(this.state.sliderContent.Three)}>
                <p className="title">Equarium</p>
                <img className="proj-img" src="images/garden.jpg" alt="placeholder" />
                <div className="test">
                    <div className="prev-icons">
                        <span>Code: <i className="fas fa-code"></i></span>
                        <span>Live: <i className="fas fa-window-maximize"></i></span>
                    </div>
                    <p className="white-rec">
                        {this.state.sliderContent.Three.solution}
                    </p>
                </div>
            </div>,
            <div key="4" className="project-list-item mobile" onClick={() => this.onProjectClick(this.state.sliderContent.Four)}>
                <p className="title">Weather App</p>
                <img className="proj-img" src="images/garden.jpg" alt="placeholder" />
                <div className="test">
                    <div className="prev-icons">
                        <span>Code: <i className="fas fa-code"></i></span>
                        <span>Live: <i className="fas fa-window-maximize"></i></span>
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