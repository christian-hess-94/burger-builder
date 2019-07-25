import React from 'react';
import classes from './BuildControl.module.css'
const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.type}</div>
        <button
            onClick={props.more}
            className={classes.More}>More</button>
        <button
            disabled={props.disabled}
            onClick={props.less}
            className={classes.Less}>Less</button>
    </div>
);

export default BuildControl;