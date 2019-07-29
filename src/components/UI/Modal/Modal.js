import React from 'react';
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from './../Button/Button'

const Modal = (props) => (
    <Auxiliary>
        <Backdrop show={props.show} clicked={props.noClick} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
            <Button clicked={props.yesClick} buttonType="Success">{props.yesText}</Button>
            <Button clicked={props.noClick} buttonType="Danger">{props.noText}</Button>
        </div>
    </Auxiliary>
);

export default Modal;