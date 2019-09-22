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
                    <img className="proj-img" src="images/native-speaker.png" alt="native speaker project screenshot" />
                    <p>Native Speaker</p>
                </div>
                <div className="project-list-item" onClick={() => { this.props.onProjectClick(this.state.previewContent.Two)}}>
                    <img className="proj-img" src="images/portfolio.png" alt="portfolio project screenshot" />
                    <p>Portfolio</p>
                </div>
                <div className="project-list-item" onClick={() => { this.props.onProjectClick(this.state.previewContent.Three)}}>
                    <img className="proj-img" src="images/equarium.png" alt="equarium project screenshot" />
                    <p>Equarium</p>
                </div>
                <div className="project-list-item" onClick={() => { this.props.onProjectClick(this.state.previewContent.Four)}}>
                    <img className="proj-img" src="images/weather.png" alt="weather project screenshot" />
                    <p>Weather App</p>
                </div>
            </div>
        )
    }

    
}

export default ProjectList;
