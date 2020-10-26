import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../component/ui/button/Button/Button';
import style from './OrderDetails.module.css'

const OrderDetails = () => {

    const totalPrice = useSelector(state => state.ProductReducer.totalPrice);
    const delivery = useSelector(state => state.ProductReducer.delivery);
    // console.log(totalPrice);

    return (
        <div className={style.OrderDetails}>
            <h3>Checkout Summary</h3>

            <ul>
                <h5 className="d-flex align-items-center justify-content-between">
                    <p>Sub-Total</p>
                    <p>$ {totalPrice} </p>
                </h5>
                <h5 className="d-flex align-items-center justify-content-between">
                    <p>Delivery</p>
                    <p>$ {delivery} </p>
                </h5>
                <h5 className="d-flex align-items-center justify-content-between">
                    <p>Payable </p>
                    <p>$ {delivery + totalPrice} </p>
                </h5>
                <Button link="/" title="Checkout" classNa="text-center d-inline-block" />
            </ul>
        </div>
    );
};

export default OrderDetails;