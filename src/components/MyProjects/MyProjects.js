import React from 'react';
import ProjectList from './ProjectList';
import Preview from './Preview';

const MyProjects = () => {
    return (
        <div>
            <div className="my-projects">
                <ProjectList />
                <div className="my-projects-side">
                    <div className="logo my-projects-logo">
                        <p>My projects</p>
                    </div>
                    <Preview />
                </div>
            </div>
        </div>
    )
}


export default MyProjects;