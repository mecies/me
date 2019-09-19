import React from 'react';

const Logo = (props) => {
    return (
        <div className="logo">
            <span>
                {props.first}<br />{props.second}
            </span>
        </div>
    )
}

export default Logo;