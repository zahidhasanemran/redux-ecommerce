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
                        {/* <ul className="list-unstyled text-right">
                            <li className="mb-2">
                                <p className="pl-3">Quick Vew</p>
                                <a href="/"><FaSearchPlus/></a>
                            </li>
                            <li className="mb-2">
                                <p>Wish List</p>
                                <a href="/"><FaHeart /></a>
                            </li>
                            <li className="">
                                <p>Compare</p>
                                <a href="/"><FaStar/></a>
                            </li>
                        </ul> */}
                    </div>
                </div>
                <div className="add_to text-center">
                    {/* <a href="/" className="mt-3 d-block">Lorem ipsum dolor</a> */}
                    <ProductTitle link="/" title="Lorem ipsum dolor"/>
                    <Reviews></Reviews>
                    {/* <ul className="stars list-unstyled">
                        <li className="list-inline-item"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item"><i className="fas fa-star"></i></li>
                        <li className="list-inline-item"><i className="fas fa-star"></i></li>
                    </ul> */}
                    {/* <p className="price mt-3 mb-4 font-weight-bold">$129</p> */}
                    <Price dam="12.77"></Price>
                    {/* <a href="/" className="addtocart">Add To Cart</a> */}
                    <AddtoCart link="/" />
                </div>
            </div>
    );
}

export default Deal;