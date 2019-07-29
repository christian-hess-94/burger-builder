import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css'
import * as BurgerIngredientTypes from './../BurgerIngredient/BurgerIngredientTypes'

const controls = [
    { type: BurgerIngredientTypes.Salad },
    { type: BurgerIngredientTypes.Cheese },
    { type: BurgerIngredientTypes.Meat },
    { type: BurgerIngredientTypes.Bacon },
]
const BuildControls = (props) => {
    console.log(props.ingredientPrices)
    return (
        <div className={classes.BuildControls}>

            <p>Current price: <strong>R$ {props.price.toFixed(2)}</strong></p>

            {controls.map((control, index) =>
                <BuildControl
                    key={control.type}
                    price={props.ingredientPrices[control.type]}
                    more={() => props.moreIngredient(control.type)}
                    less={() => props.lessIngredient(control.type)}
                    type={control.type}
                    disabled={props.disabled[control.type]}
                />
            )}

            <button
                disabled={!props.purchaseable}
                className={classes.OrderButton}
                onClick={props.ordered}>ORDER NOW</button>
        </div>
    )
};

export default BuildControls;