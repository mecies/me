import React from 'react';

const Logo = (props) => {
    return (
        <div className="logo">
            <p>
                {props.first}<br />{props.second}
            </p>
        </div>
    )
}

export default Logo;