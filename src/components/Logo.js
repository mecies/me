import React from 'react';

const Logo = (props) => {
    return (
        <div className={props.className + " logo"} data-aos="fade-in">
            <span>
                {props.first}<br />{props.second}
            </span>
        </div>
    )
}

export default Logo;