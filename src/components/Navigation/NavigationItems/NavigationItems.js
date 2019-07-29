import React from 'react';
import PropTypes from 'prop-types';
import classes from './NavigationItems.module.css'
import NavItem from './NavItem/NavItem';

const NavigationItems = props => {
    return (
        <ul className={classes.NavigationItems}>
            <NavItem active link="/" >Burger Builder</NavItem>
            <NavItem link="/checkout" >Checkout</NavItem>
        </ul>
    );
};

NavigationItems.propTypes = {

};

export default NavigationItems;