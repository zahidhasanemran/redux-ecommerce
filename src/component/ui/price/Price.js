
import React from 'react';
import classes from './Price.module.css'


function Price({dam}) {
    return (
        <p className={classes.pricee}>$ {dam} </p>
    );
}

export default Price;