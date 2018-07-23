import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Меню</div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;