import React from 'react';

import classes from './Button.module.css'
import PropTypes from 'prop-types';

const Button = props => {
    return (
        <button
            className={[classes.Button, classes[props.buttonType]].join(' ')}
            onClick={props.clicked}>
            {props.children}
        </button>
    );
};

Button.propTypes = {
    buttonType: PropTypes.string.isRequired
};

export default Button;