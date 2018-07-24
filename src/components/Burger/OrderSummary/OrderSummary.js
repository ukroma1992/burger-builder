import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    
    componentWillUpdate() {
        console.log("OrderSummary WILL UPDATE");
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
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
                <p><strong>Цена: {this.props.price.toFixed(2)} грн.</strong></p>
                <p>Сделать заказ?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Отменить</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Подтвердить</Button>
            </Aux>
        );
    }
};

export default OrderSummary;