import React, { Component } from 'react';

import { BreadTop } from './BurgerIngredientTypes'
import PropTypes from 'prop-types'
import classes from './BurgerIngredient.module.css'

class BurgerIngredient extends Component {
    render() {
        let ingredient = null

        if (this.props.type === BreadTop) {
            ingredient =
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>

        } else {
            ingredient = <div className={classes[this.props.type]} ></div>
        }


        return ingredient
    }

}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient