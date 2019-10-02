import React from 'react';

const Loader = (props) => {

    return (
        <div className="">
            <div className="">{props.message}</div>
        </div>
    )
}

Loader.defaultProps = {
    message: 'Loading...'
}

export default Loader;