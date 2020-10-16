import React, { Fragment } from 'react';
import classes from './TodaysDeal.module.css'
import banner_1 from '../../../../assets/img/banner-img1.jpg'
// import SectionTitle from '../../SectionTitle/SectionTitle'
import DoyouKnow from '../DoyouKnow/DoyouKnow';
import VegDeal from '../VegDeal/VegDeal';
import Deal from './Deal/Deal';


function TodaysDeal() {
    return (
        <Fragment>
            <div className={classes.sidebar_one}>
                <img src={banner_1} alt="" />
                <h2 className="text-center pt-3 pb-0">Today's Deal</h2>
            </div>
            <Deal></Deal>
            <DoyouKnow></DoyouKnow>
            <VegDeal></VegDeal>
        </Fragment>
    );
}

export default TodaysDeal;