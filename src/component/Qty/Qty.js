import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { productCountIncrement, productCountDecrement } from '../../e-store/actions';
import style from './Qty.module.css'


    

const Qty = (props) => {

    const dispatch = useDispatch();

    return (
        <div className={style.qty}>
            <button disabled={props.qty == 1} onClick={() => dispatch(productCountDecrement(props.id, props.cart, props.products, props.count))}> - </button>
            <p> {props.qty} </p>
            <button  onClick={() => dispatch(productCountIncrement(props.id, props.cart, props.products, props.count))}> + </button>
        </div>
    );
};

export default withRouter(Qty);