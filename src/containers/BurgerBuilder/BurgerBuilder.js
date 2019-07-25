import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    Salad: 0.5,
    Cheese: 0.4,
    Meat: 1.3,
    Bacon: 0.7
}

export default class BurgerBuilder extends Component {

    state = {
        ingredients: {
            Salad: 0,
            Bacon: 0,
            Cheese: 0,
            Meat: 0
        },
        totalPrice: 4
    }

    moreIngredientHandler = (type) => {
        console.log("Adding ", type)
        const oldCount = this.state.ingredients[type]
        const newCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount

        const priceAddition = INGREDIENT_PRICES[type]

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: this.state.totalPrice + priceAddition
        })
    }

    lessIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount > 0) {
            const newCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            }
            updatedIngredients[type] = newCount

            const priceDeduction = INGREDIENT_PRICES[type]

            this.setState({
                ingredients: updatedIngredients,
                totalPrice: this.state.totalPrice - priceDeduction
            })
        }

    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        let not_purchaseable = false;

        for (let key in disabledInfo) {
            if (disabledInfo[key] > 0) {
                not_purchaseable = true
            }
            disabledInfo[key] = disabledInfo[key] <= 0 //Seta se o valor é menor ou igual a 0 e retorna o booleano
        }
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    moreIngredient={this.moreIngredientHandler}
                    lessIngredient={this.lessIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable={not_purchaseable} />
            </Auxiliary>
        )
    }
}
