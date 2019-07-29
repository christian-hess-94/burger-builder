import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from './../../UI/Backdrop/Backdrop'
import classes from './SideDrawer.module.css'
import Auxiliary from '../../../hoc/Auxiliary';

const SideDrawer = props => {

    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.show) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Auxiliary>

            <Backdrop show={props.show} clicked={props.closed} />

            <div className={attachedClasses.join(' ')}>

                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    );
};

SideDrawer.propTypes = {

};

export default SideDrawer;