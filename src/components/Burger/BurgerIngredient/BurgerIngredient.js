import React, { Component } from 'react';
import classes from './BurgerIngredient.module.css'
import PropTypes from 'prop-types'
import { BreadTop } from './BurgerIngredientTypes'


class BurgerIngredient extends Component {
    render() {
        let ingredient = null

        console.log("Rendering: ", this.props.type)

        if (this.props.type === BreadTop) {
            console.log(`${this.props.type} is rendered with Seeds1 and Seeds2`)
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