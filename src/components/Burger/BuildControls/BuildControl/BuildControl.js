import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Меньше</button>
        <button className={classes.More} onClick={props.added}>Больше</button>
    </div>
);

export default buildControl;