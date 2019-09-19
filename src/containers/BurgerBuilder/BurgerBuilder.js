import React, { Component } from 'react'

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import { ordersInstance } from './../../axios/instances'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    Salad: 2.50,
    Cheese: 0.80,
    Meat: 3.70,
    Bacon: 2.50
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 8,
        purchasing: false,
        loading: false,
        error: false
    }


    componentDidMount() {
        ordersInstance.get('/ingredients.json')
            .then(response => {
                console.log("%c Starting ingredients ", 'color: lime;font-weight: bold; font-size: 20px ', response.data);
                this.setState({ ingredients: response.data })
            }).catch(error => {
                this.setState({ error: true })
            }).finally(data => {

            })


    }

    moreIngredientsHandler = (type) => {
        console.log('Adding ', type)
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
        console.log('Clicked Order now')
        this.setState({ purchasing: true })
    }

    yesPurchase = () => {
        console.warn('%c Clicked yes for purchasing', 'color: green; font-weight: bold')
        this.setState({ loading: true })
        ordersInstance.post('/orders.json',
            {
                ingredients: this.state.ingredients,
                totalPrice: this.state.totalPrice,
                customer: {
                    name: 'Christian Hess',
                    address: {
                        street: 'Rua Teste',
                        zipCode: '12345-678',
                        country: 'Brazil'
                    },
                    email: 'test@test.com'
                },
                deliveryMethod: 'fastest'
            })
            .then(result => {

            })
            .catch(error => {

            })
            .finally(x => {
                this.setState({ purchasing: false, loading: false })
            })
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

        let orderSummary = null
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />
        let buildControls = this.state.error ? null : <Spinner />

        if (this.state.ingredients) {

            burger = <Burger ingredients={this.state.ingredients} />

            buildControls = <BuildControls
                ingredientPrices={INGREDIENT_PRICES}
                moreIngredient={this.moreIngredientsHandler}
                lessIngredient={this.lessIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                ordered={this.purchaseHandler}
                purchaseable={not_purchaseable} />

            orderSummary = <OrderSummary
                totalPrice={this.state.totalPrice}
                ingredients={this.state.ingredients} />
        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Auxiliary>
                <Modal
                    show={this.state.purchasing}
                    yesClick={this.yesPurchase}
                    noClick={this.noPurchase}
                    yesText='Yes'
                    noText='Close'>
                    {orderSummary}
                </Modal>
                {burger}
                {buildControls}
            </Auxiliary>
        )
    }
}
export default withErrorHandler(BurgerBuilder, ordersInstance)