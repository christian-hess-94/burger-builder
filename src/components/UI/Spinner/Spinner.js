import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import React from 'react';
import classes from './Spinner.module.css'

const Spinner = (props) => (
    <Auxiliary>
        <div className={classes.loader} />
        <h1 style={{ textAlign: 'center' }}>Processing...</h1>
    </Auxiliary>
);

export default Spinner;