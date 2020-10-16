
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../e-store/actions';
import classes from './AddtoCart.module.css';



function AddtoCart({id}) {

    const dispatch = useDispatch();
    
    const addToCART = (e, id) => {
        e.preventDefault();
        dispatch(addToCart(id));
        // console.log(cart);
    }

    return (
        <Link onClick={(e) => addToCART(e,id)} className={classes.addtocart}> Add To Cart </Link>
    );
}

export default AddtoCart;