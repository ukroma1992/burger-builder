import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );
        });
    return (
        <Aux>
            <h3>Ваш Заказ</h3>
            <p>Вкусный бургер со следующими ингредиентами:</p>
            <ul>
                { ingredientSummary }
            </ul>
            <p>Сделать заказ?</p>
            <button>Отменить</button>
            <button>Подтвердить</button>
        </Aux>
    );
};

export default orderSummary;