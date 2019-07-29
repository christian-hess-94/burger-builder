import * as BurgerIngredientTypes from './BurgerIngredient/BurgerIngredientTypes';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import React from 'react';
import classes from './Burger.module.css'

const Burger = (props) => {
    const ingredientKeys = Object.keys(props.ingredients)//Criar um array com as chaves (Salad,Bacon,Cheese,Meat)

    let transformedIngredients = ingredientKeys.map((ingredientKey) => { //Percorre o array e executa em cada valor a função anonima

        let ingredientAmounts = [...Array(props.ingredients[ingredientKey])] //Cria um array de tamanho igual ao valor da key (Salad, Bacon, Cheese, Meta)

        return ingredientAmounts.map((_, index) => { //Percore o array X vezes de acordo com a key
            return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />//Criar e adiciona X elementos BurgerIngredient de acordo com a key (Salad, Bacon, Cheese, Meta)
        })
    }).reduce((arr, el) => {//Verificando se não há nenhum ingrediente
        return arr.concat(el)
    }, [])

    return (
        < div className={classes.Burger} >
            <BurgerIngredient type={BurgerIngredientTypes.BreadTop} />
            {transformedIngredients.length === 0 ? <p>Please start adding ingredients</p> : transformedIngredients}
            <BurgerIngredient type={BurgerIngredientTypes.BreadBottom} />
        </div >)
};

export default Burger;