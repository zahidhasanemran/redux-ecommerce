
import React from 'react';
import Star from '../ui/favIcon/star/Star';
import classes from './Reviews.module.css'

function Reviews(props) {
    return (
        <ul className={classes.stars}>
            <li className="list-inline-item"><Star/></li>
            <li className="list-inline-item"><Star/></li>
            <li className="list-inline-item"><Star/></li>
            <li className="list-inline-item"><Star/></li>
            <li className="list-inline-item"><Star/></li>
            
            
        </ul>
    );
}

export default Reviews;