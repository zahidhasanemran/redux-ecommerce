
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../e-store/actions/index';

import classes from './AddtoCart.module.css';



function AddtoCart({id}) {

    const cart = useSelector(state => state.ProductReducer.cart);

    const dispatch = useDispatch();
    
    const addToCART = (e, id) => {
        e.preventDefault();
        dispatch(addToCart(id, cart));
        console.log(cart);
    }

    

    return (
        <Link onClick={(e) => addToCART(e,id)} className={classes.addtocart}> Add To Cart </Link>
    );
}

export default AddtoCart;