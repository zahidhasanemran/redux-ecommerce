
import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './ProductTitle.module.css';


function ProductTitle({id, title, history}) {
    return (
        <p onClick={() => history.push('/single/' + id)} className={classes.ProductTitle}> {title} </p>
    );
}

export default withRouter(ProductTitle);