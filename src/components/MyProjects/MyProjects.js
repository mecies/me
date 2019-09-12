import React from 'react';
import ProjectList from './ProjectList';
import Preview from './Preview';

class MyProjects extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            previewContent: {
                title: 'siema',
                problem: 'siema ja problem',
                solution: 'siema ja solution'
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
                problem: previewContent.problem,
                solution: previewContent.solution
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="my-projects">
                    <ProjectList onProjectClick={this.onProjectClick}/>
                    <div className="my-projects-side">
                        <div className="logo my-projects-logo">
                            <p>My projects</p>
                        </div>
                        <Preview previewContent={this.state.previewContent}/>
                    </div>
                </div>
            </div>
        )
    }

}


export default MyProjects;