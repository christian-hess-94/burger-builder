import React, { Component } from 'react'

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import buttonClasses from './../BuildControls/BuildControl/BuildControl.module.css'

export default class OrderSummary extends Component {
    //Can be functional component
    componentDidUpdate() {
        console.log("[Ordersummary] DidUpdate")
    }

    render() {
        let ingredientSummaryKeys = Object.keys(this.props.ingredients)
        let ingredientSummary = ingredientSummaryKeys.map((type, index) => {
            return <li key={ingredientSummaryKeys[index]}> {ingredientSummaryKeys[index]}: {this.props.ingredients[type]}</li>
        })
        return (
            <Auxiliary>
                <h3>Your order</h3>
                <p>Delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total price is <strong className={[buttonClasses.Less, buttonClasses.Button].join(' ')}>R$ {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
            </Auxiliary>
        )
    }
}
