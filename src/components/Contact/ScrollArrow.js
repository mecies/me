import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'


class ScrollArrow extends React.Component {

    render() {
        return (
            <AnchorLink href='#home'>
                <i id="ue-scroll" className="ue-scroll fas fa-caret-up"></i>
            </AnchorLink>
        )
    }
}



export default ScrollArrow;