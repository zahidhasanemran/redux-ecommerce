import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Category({classes, proFilter}) {

    let dispatch = useDispatch();
    let categories = useSelector(state => state.ProductReducer.category);
    let products = useSelector(state => state.ProductReducer.products);


    function dispatching (cat,e) {
        e.preventDefault();
        dispatch(proFilter(cat, products));
    }

    return (
        categories.map((cat, index) => {
            return <li className={classes} key={index}>
                <Link onClick={(e) => dispatching(cat, e)} to=""> {cat} </Link>
            </li>
        })
    );
}

export default Category;