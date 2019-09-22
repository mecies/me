import React from 'react';

const Preview = ({ previewContent }) => {
    console.log(previewContent)
    return (
        <div className="my-projects-preview">
            <p className="project-idea">Have a cool project idea? <a href="#home">Contact me</a></p>
            <p className="rec">{previewContent.title}</p>
            <div className="prev-icons">
                <a href={previewContent.code}>Code: {previewContent.title === "Native Speaker" ? <i className="fas fa-dollar-sign"></i> : <i className="fas fa-code"></i>}</a>
                <a href={previewContent.live}>Live: <i className="fas fa-window-maximize"></i></a>   
            </div>
            <p className="rec big-rec">{previewContent.solution}</p>
        </div>
    )
}


export default Preview;