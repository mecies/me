import React from 'react';

const Preview = ({ previewContent }) => {
    return (
        <div className="my-projects-preview">
            <p className="project-idea">Have a cool project idea? <a href="#contactme">Contact me</a></p>
            <p className="rec">{previewContent.title}</p>
            <div className="prev-icons">
                {previewContent.title === "Native Speaker" ? <span>Code: <i className="fas fa-dollar-sign"></i></span> : <a href={previewContent.code} target="_blank" rel="noopener noreferrer">Code: <i className="fas fa-code"></i></a>}
                <a href={previewContent.live} target="_blank" rel="noopener noreferrer">Live: <i className="fas fa-window-maximize"></i></a>   
            </div>
            <p className="rec big-rec">{previewContent.solution}</p>
        </div>
    )
}


export default Preview;