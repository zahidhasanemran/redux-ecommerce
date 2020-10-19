import React, { useEffect } from 'react';
import classes from './Topbar.module.css'
import Logo from '../../ui/logo/Logo'
import logoImg from '../../../assets/img/logo.png'
import iconAcount from '../../../assets/img/icon-account.jpg'
import cartImg from '../../../assets/img/cart.png'
import { FaSearch } from "react-icons/fa";
// import {ProductCountLoad} from '../../../e-store/actions/index'
// import { useDispatch, useSelector } from 'react-redux';



const Topbar = () => {

    // let count = useSelector(state => state.ProductReducer.count)
    // let dispatch = useDispatch();
    // // console.log(count);

    // useEffect(()=>{
    //     dispatch(ProductCountLoad());
    // }, []);

    return (
        <div className={classes.header_section}>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-4 text-sm-center col-sm-6">
                        <div className={classes.header_search}>
                            <form action="">
                                <input type="search" q="googlesearch" placeholder="Search" />
                                <a href="/"><label htmlFor="search"><FaSearch/></label></a>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4 text-center col-sm-3">
                        <Logo link="/" img={logoImg} alt="kababi"/>
                        
                    </div>
                    <div className="col-md-4 text-right col-sm-3">
                        <div className={classes.cart_section}>
                            <ul className="list-unstyled">
                                <li className="list-inline-item"><a href="/"><img src={iconAcount} alt="account" /></a></li>
                                <li className="list-inline-item">
                                    <a href="/"><img src={cartImg} alt="cart" />
                                    <small style={{position: "relative", top: '-10px', left: '-5px',color: 'green'}}> 2 </small>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Topbar;