import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import Button from '../../../component/ui/button/Button/Button';
import style from './OrderDetails.module.css'

const OrderDetails = (props) => {

    const totalPrice = useSelector(state => state.ProductReducer.totalPrice);
    const delivery = useSelector(state => state.ProductReducer.delivery);
    const pros = useSelector(state => state.ProductReducer);
    const {count} = pros

    const checkOutHandle = () => {
        props.history.push('/login?redirect=shipping')
    }
    const placeOrderHandle = () => {
        console.log("order done");
    }

    return (
        <div className={style.OrderDetails}>
            <h3>Checkout Summary</h3>

            <ul>

                <h5 className="d-flex align-items-center justify-content-between">
                    <p>Total Products</p>
                    <p>$ {count} </p>
                </h5>

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
                 <button className="text-center d-inline-block" onClick={ props.btnPath === '/place-order' ? placeOrderHandle : checkOutHandle }> {props.btnPath === '/place-order' ? 'Place Order' : 'Checkout'} </button> 
                
            </ul>
        </div>
    );
};

export default withRouter(OrderDetails);