import React from 'react';
import './Button/Button.scss';


const FontIcon = (props) => {

    const {iconClass} = props;
    return (
        <span className={`icon ${iconClass}`}></span>
    )
}


export default FontIcon;

