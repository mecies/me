import React from 'react';
import projectDescription from './projectDescription'

class ProjectList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            previewContent: projectDescription
        }
    }

    render(){
        return (
            <div className="my-projects-list">
                <div className="project-list-item" onClick={() => { this.props.onProjectClick(this.state.previewContent.One)}} >
                    <img src="" alt="" />
                    <p>Native Speaker</p>
                </div>
                <div className="project-list-item" onClick={() => { this.props.onProjectClick(this.state.previewContent.Two)}}>
                    <img src="" alt="" />
                    <p>Portfolio</p>
                </div>
                <div className="project-list-item" onClick={() => { this.props.onProjectClick(this.state.previewContent.Three)}}>
                    <img src="" alt="" />
                    <p>Equarium</p>
                </div>
                <div className="project-list-item" onClick={() => { this.props.onProjectClick(this.state.previewContent.Four)}}>
                    <img src="" alt="" />
                    <p>Weather App</p>
                </div>
            </div>
        )
    }

    
}

export default ProjectList;
