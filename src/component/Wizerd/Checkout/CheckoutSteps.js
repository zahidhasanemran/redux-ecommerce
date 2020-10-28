import React from 'react';
import style from './CheckoutSteps.module.css';


const CheckoutSteps = (props) => {
    return (
        <div className={style.CheckoutSteps} >
            <div className={props.step1 ? `${style.active}` : '' }>Signin</div>
            <div className={props.step2 ? `${style.active}` : ''}>Shipping</div>
            <div className={props.step3 ? `${style.active}` : ''}>Payment</div>
            <div className={props.step4 ? `${style.active}` : ''}>Place Order</div>
        </div>
    );
};

export default CheckoutSteps;