import React from 'react';

const Preview = ({ previewContent }) => {
    return (
        <div className="my-projects-preview">
            <p className="project-idea">Have a cool project idea? <a href="#home">Contact me</a></p>
            <p className="rec">{previewContent.title}</p>
            <div className="prev-icons">
                <span>Code: <i className="fas fa-code"></i></span>
                <span>Live: <i className="fas fa-window-maximize"></i></span>   
            </div>
            <p className="rec big-rec">{previewContent.solution}</p>
        </div>
    )
}

export default Preview;