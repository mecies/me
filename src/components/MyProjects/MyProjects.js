import React from 'react';
import Rectangle from './Rectangle';

const MyProjects = () => {
    return (
        <div className="my-projects">
            {renderRectangles()}
            <div className="my-rpojects-logo logo">
                <p>My projects</p>
            </div>
        </div>
    )
}

function renderRectangles() {
    
    return (
        <div className="rectangle-row">
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
            <div className="rectangle"></div>
        </div>
    )
}

export default MyProjects;