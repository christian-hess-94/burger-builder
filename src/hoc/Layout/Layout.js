import React, { Component } from 'react'

import Auxiliary from '../Auxiliary/Auxiliary';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css'

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
