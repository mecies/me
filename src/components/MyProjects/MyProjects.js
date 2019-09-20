import React from 'react';
import ProjectList from './ProjectList';
import Preview from './Preview';
import Logo from '../Logo';
import SimpleSlider from '../SimpleSlider';

class MyProjects extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            previewContent: {
                title: 'Select a project',
                solution: 'My contribution to the project'
            }
        }
    }

    updatePreview(previewContent) {
        this.setState({
            previewContent: previewContent
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
            <div key="1" className="project-list-item" onClick={() => { this.props.onProjectClick(this.state.previewOne) }} >
                <img src="" alt="" />
                <p>Description 1</p>
            </div>,
            <div key="2" className="project-list-item" onClick={() => { this.props.onProjectClick(this.state.previewTwo) }}>
                <img src="" alt="" />
                <p>Description 2</p>
            </div>,
            <div key="3" className="project-list-item" onClick={() => { this.props.onProjectClick(this.state.previewThree) }}>
                <img src="" alt="" />
                <p>Description 3</p>
            </div>,
            <div key="4" className="project-list-item" onClick={() => { this.props.onProjectClick(this.state.previewFour) }}>
                <img src="" alt="" />
                <p>Description 4</p>
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
                            <SimpleSlider show={this.renderProjects()} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default MyProjects;