import React from 'react';
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

export default NavigationItems;