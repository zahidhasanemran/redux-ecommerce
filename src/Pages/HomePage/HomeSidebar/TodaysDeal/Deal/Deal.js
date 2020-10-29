import React from 'react';
import classes from './Deal.module.css';
import ProductTitle from '../../../../../component/ui/title/ProductTitle';
import product13 from '../../../../../assets/img/product13.jpg'
import Reviews from '../../..//../../component/Reviews/Reviews'
import Price from '../../../../../component/ui/price/Price';
import AddtoCart from '../../../../../component/ui/button/AddtoCart';
// import { FaSearchPlus, FaHeart, FaStar } from 'react-icons/fa';

function Deal() {
    return (
        <div className={classes.sidebar_two}>
                <div className={classes.img_box}><img src={product13} alt="" /></div>
                <div className={classes.hover_section}>
                    <div className={classes.hover_one}>
                        <p className={classes.hot}>HOT</p>
                        <ul className={classes.counter}>
                            <li className="text-center mb-2">
                                <span className="days">00</span>
                                <p className="days_ref">DAYS</p>
                            </li>
                            <li className="text-center mb-2">
                                <span className="hours">00</span>
                                <p className="hours_ref">HRS</p>
                            </li>
                            <li className="text-center mb-2">
                                <span className="minutes">00</span>
                                <p className="minutes_ref">MINS</p>
                            </li>
                            <li className="text-center">
                                <span className="seconds last">00</span>
                                <p className="seconds_ref">SEC</p>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.hover_two}>
                        
                    </div>
                </div>
                <div className="add_to text-center">
                    <div className="mt-3"><ProductTitle link="/" title="Lorem ipsum dolor"/></div>
                    <Reviews></Reviews>
                    <Price dam="12.77"></Price>
                    <AddtoCart link="/" />
                </div>
            </div>
    );
}

export default Deal;