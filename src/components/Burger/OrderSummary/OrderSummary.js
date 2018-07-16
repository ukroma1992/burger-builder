import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
            <Button btnType="Danger" clicked={props.purchaseCanceled}>Отменить</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Подтвердить</Button>
        </Aux>
    );
};

export default orderSummary;