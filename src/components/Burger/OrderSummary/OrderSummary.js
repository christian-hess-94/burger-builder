import React from 'react';
import PropTypes from 'prop-types';
import buttonClasses from './../BuildControls/BuildControl/BuildControl.module.css'
import Auxiliary from '../../../hoc/Auxiliary';

const OrderSummary = props => {
    let ingredientSummaryKeys = Object.keys(props.ingredients)
    let ingredientSummary = ingredientSummaryKeys.map((type, index) => {
        return <li key={ingredientSummaryKeys[index]}> {ingredientSummaryKeys[index]}: {props.ingredients[type]}</li>
    })
    console.table(ingredientSummary)
    return (
        <Auxiliary>
            <h3>Your order</h3>
            <p>Delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total price is <strong className={[buttonClasses.Less, buttonClasses.Button].join(' ')}>R$ {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
        </Auxiliary>
    );
};

OrderSummary.propTypes = {

};

export default OrderSummary;