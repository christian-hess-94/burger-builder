
import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';



export default class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }
    sideDrawerOpenHandler = () => {
        this.setState({ showSideDrawer: true })
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar toggleSideDrawer={this.sideDrawerOpenHandler} />
                <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}
