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
const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>R$ {props.price.toFixed(2)}</strong></p>
        {controls.map(control =>
            <BuildControl
                key={control.type}
                more={() => props.moreIngredient(control.type)}
                less={() => props.lessIngredient(control.type)}
                type={control.type}
                disabled={props.disabled[control.type]}
            />
        )}

        <button disabled={props.disabledButton} className={classes.OrderButton}>ORDER NOW</button>
    </div>
);

export default BuildControls;