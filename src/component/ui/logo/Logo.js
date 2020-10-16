import classes from './logo.module.css';
import React from 'react';

const logo = ({link, img, alt}) => {
    return (
        <div className={classes.log}>
            <a href={link}>
                <img src={img} alt={alt} />
            </a>
        </div>
    );
};

export default logo;