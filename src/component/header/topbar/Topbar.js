import React from 'react';
import classes from './Topbar.module.css'
import Logo from '../../ui/logo/Logo'
import logoImg from '../../../assets/img/logo.png'
import iconAcount from '../../../assets/img/icon-account.jpg'
import cartImg from '../../../assets/img/cart.png'
import proImg from '../../../assets/img/pro.jpg'
import { FaSearch } from "react-icons/fa";
// import {ProductCountLoad} from '../../../e-store/actions/index'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Topbar = () => {


    let count = useSelector(state => state.ProductReducer.count)
    const UserInfo = useSelector(state => state.UserReducer)
    const {error, isAuth, loading, userInfo: {id, email, name, isAdmin}} = UserInfo;
    // console.log(isAuth);

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
                                <li className="list-inline-item">
                                    {isAuth ? <Link to="/"><img style={{width: '25px', height: '25px', borderRadius: '50%'}} src={proImg} alt="cart" /></Link> : <Link to="/"><img src={iconAcount} alt="account" /></Link> }
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/cart"><img src={cartImg} alt="cart" />
                                        <small style={{position: "relative", top: '-10px', left: '-5px',color: 'green'}}> {count} </small>
                                    </Link>
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