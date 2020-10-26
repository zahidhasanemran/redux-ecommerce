import React from 'react';
import { Link } from 'react-router-dom';
import style from './Button.module.css';


const Button = ({link, title, classNa}) => {
    return (
        <Link to={link} className={`${style.Button} ${classNa}`}>
            {title}
        </Link>
    );
};

export default Button;