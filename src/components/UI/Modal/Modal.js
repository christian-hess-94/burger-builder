import React, { Component } from 'react'

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import Button from './../Button/Button'
import classes from './Modal.module.css'

export default class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {

        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
        /* if (nextProps.show !== this.props.show) {
            return true
        } else {
            return false
        } */

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('[Modal] DidUpdate')
    }

    render() {
        return (
            <Auxiliary>
                <Backdrop show={this.props.show} clicked={this.props.noClick} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                    <br />
                    <Button clicked={this.props.yesClick} buttonType="Success">{this.props.yesText}</Button>
                    <Button clicked={this.props.noClick} buttonType="Danger">{this.props.noText}</Button>
                </div>
            </Auxiliary>
        )
    }
}
