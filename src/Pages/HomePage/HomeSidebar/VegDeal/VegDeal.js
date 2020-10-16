import React from 'react';
import classes from './VegDeal.module.css';
import rhs_1 from '../../../../assets/img/rhs-banner-img1.jpg'


function VegDeal(props) {
    return (
        <div className={classes.sidebar_three}>
            <img src={rhs_1} alt="" />
        </div>
    );
}

export default VegDeal;