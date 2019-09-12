import React from 'react';

class ProjectList extends React.Component {

    previewOne = { title: "project 1", solution: "solution 1" }
    previewTwo = { title: "project 2", solution: "solution 2" }
    previewThree = { title: "project 3", solution: "solution 3" }
    previewFour = { title: "project 4", solution: "solution 4" }

    render(){
        return (
            <div className="my-projects-list">
                <div className="project-list-item top-item" onClick = { () => { this.props.onProjectClick(this.previewOne) } } >
                    <img src="" alt="" />
                    <p>Description 1</p>
                </div>
                <div className="project-list-item top-item" onClick = { () => { this.props.onProjectClick(this.previewTwo) } }>
                    <img src="" alt="" />
                    <p>Description 2</p>
                </div>
                <div className="project-list-item bottom-item" onClick = { () => { this.props.onProjectClick(this.previewThree) } }>
                    <img src="" alt="" />
                    <p>Description 3</p>
                </div>
                <div className="project-list-item bottom-item" onClick = { () => { this.props.onProjectClick(this.previewFour) } }>
                    <img src="" alt="" />
                    <p>Description 4</p>
                </div>
            </div>
        )
    }

    
}

export default ProjectList;
