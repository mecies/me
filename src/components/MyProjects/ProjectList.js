import React from 'react';
import projectDescription from './projectDescription'
import LanguageContext from '../../context/LanguageContext';


class ProjectList extends React.Component {
    static contextType = LanguageContext;

    constructor(props) {
        super(props)

        this.state = {
            previewContent: projectDescription
        }
    }

    render(){
        return (
            <div className="my-projects-list">
                <div className="project-list-item" onClick={() => { this.props.onProjectClick(this.context === "english" ? this.state.previewContent.One : this.state.previewContent.OnePL)}} >
                    <img className="proj-img" src="images/native-speaker.png" alt="native speaker project screenshot" />
                    <p>{this.context === "english" ? this.state.previewContent.One.title : this.state.previewContent.OnePL.title}</p>
                </div>
                <div className="project-list-item" onClick={() => { this.props.onProjectClick(this.context === "english" ? this.state.previewContent.Two : this.state.previewContent.TwoPL)}}>
                    <img className="proj-img" src="images/portfolio.png" alt="portfolio project screenshot" />
                    <p>{this.context === "english" ? this.state.previewContent.Two.title : this.state.previewContent.TwoPL.title}</p>
                </div>
                <div className="project-list-item" onClick={() => { this.props.onProjectClick(this.context === "english" ? this.state.previewContent.Three : this.state.previewContent.ThreePL)}}>
                    <img className="proj-img" src="images/equarium.png" alt="equarium project screenshot" />
                    <p>{this.context === "english" ? this.state.previewContent.Three.title : this.state.previewContent.ThreePL.title}</p>
                </div>
                <div className="project-list-item" onClick={() => { this.props.onProjectClick(this.context === "english" ? this.state.previewContent.Four : this.state.previewContent.FourPL)}}>
                    <img className="proj-img" src="images/weather.png" alt="weather project screenshot" />
                    <p>{this.context === "english" ? this.state.previewContent.Four.title : this.state.previewContent.FourPL.title}</p>
                </div>
            </div>
        )
    }

    
}

export default ProjectList;
