import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = (props) => {

    const {classText, text, btnType, onClick, isDisabled} = props;

    return (
        <button className={(`btn ${classText}`)}
                onClick={onClick}
                type={btnType} disabled={isDisabled}>
            {text}</button>

    )
}


Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    classText: PropTypes.string.isRequired
};

export default Button;

