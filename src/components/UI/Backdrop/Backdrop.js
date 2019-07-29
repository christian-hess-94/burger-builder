import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backdrop.module.css'

const Backdrop = props => (
    props.show ? <div
        onClick={props.clicked}
        className={classes.Backdrop}></div> : null
)

Backdrop.propTypes = {

};

export default Backdrop;