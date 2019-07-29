import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    Salad: 2.50,
    Cheese: 0.80,
    Meat: 3.70,
    Bacon: 2.50
}

export default class BurgerBuilder extends Component {

    state = {
        ingredients: {
            Salad: 0,
            Bacon: 0,
            Cheese: 0,
            Meat: 0
        },
        totalPrice: 8,
        purchasing: false
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

    purchaseHandler = () => {
        console.log('purchasing')
        this.setState({ purchasing: true })
    }

    yesPurchase = () => {
        console.warn('%c Clicked yes for purchasing', 'color: green; font-weight: bold')

        this.setState({ purchasing: false })
    }

    noPurchase = () => {
        console.warn('%c Clicked no for purchasing', 'color: crimson; font-weight: bold')

        this.setState({ purchasing: false })
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
                <Modal
                    show={this.state.purchasing}
                    yesClick={this.yesPurchase}
                    noClick={this.noPurchase}
                    yesText="Yes"
                    noText="Close">
                    <OrderSummary totalPrice={this.state.totalPrice} ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientPrices={INGREDIENT_PRICES}
                    moreIngredient={this.moreIngredientHandler}
                    lessIngredient={this.lessIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    purchaseable={not_purchaseable} />
            </Auxiliary>
        )
    }
}
