import React from 'react';
import classes from './BuildControl.module.css'
const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <button
            onClick={props.more}
            className={classes.More}>
            + More
        </button>
        <div className={classes.Label}>
            {`${props.type}(R$ ${props.price})`}
        </div>
        <button
            disabled={props.disabled}
            onClick={props.less}
            className={classes.Less}>
            - Less
        </button>
    </div>
);

export default BuildControl;