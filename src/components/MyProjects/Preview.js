import React from 'react';

const Preview = ({ previewContent }) => {
    return (
        <div className="my-projects-preview">
            <p className="rec">{previewContent.title}</p>
            <p className="rec big-rec">{previewContent.problem}</p>
            <p className="rec big-rec">{previewContent.solution}</p>
        </div>
    )
}

export default Preview;