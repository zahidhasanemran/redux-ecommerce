import React from 'react';
import classes from './DoyouKnow.module.css';
import bannerHome_1 from '../../../../assets/img/banner_home1.jpg'

function DoyouKnow(props) {
    return (
        <div className={classes.sidebar_three}>
            <img src={bannerHome_1} alt="" />
        </div>
    );
}

export default DoyouKnow;