import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    { label: 'Салат', type: 'salad' },
    { label: 'Бекон', type: 'bacon' },
    { label: 'Сыр', type: 'cheese' },
    { label: 'Мясо', type: 'meat' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Текущая цена: <strong>{props.price.toFixed(2)}</strong> грн</p>
        { controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        )) }   
    </div>
);

export default buildControls;