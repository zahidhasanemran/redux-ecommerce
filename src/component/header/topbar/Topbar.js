import React, { useState } from 'react';
import classes from './Topbar.module.css'
import Logo from '../../ui/logo/Logo'
import logoImg from '../../../assets/img/logo.png'
import iconAcount from '../../../assets/img/icon-account.jpg'
import cartImg from '../../../assets/img/cart.png'
import proImg from '../../../assets/img/pro.jpg'
import { FaSearch, FaBars } from "react-icons/fa";
// import {LogOut} from '../../../e-store/actions/index'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MobileMenu from '../../ui/MobileMenu/MobileMenu.js';


const Topbar = () => {


    let count = useSelector(state => state.ProductReducer.count)
    const UserInfo = useSelector(state => state.UserReducer)
    const { isAuth } = UserInfo;
    const [mobileBar, setMobileBar] = useState(false);

    const [menu, setMenu] = useState(false)

    const searchStatus = (e) => {
        e.preventDefault();
        setMobileBar(!mobileBar)
    }

    const callSidebar = (e) => {
        e.preventDefault();
        setMenu(!menu)
        // console.log(menu);
    }
    
    const closeSidebar = (e) => {
        e.preventDefault();
        setMenu(false)
    }

    const onLinkSidebarClose = () => {
        setMenu(false)
    }

    return (
        
        <div className={classes.header_section}>
            <MobileMenu classes={menu} closeSidebar={closeSidebar} onLinkSidebarClose={onLinkSidebarClose} />
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-4 col-12 text-sm-center col-sm-6 order-md-first">
                        <div className={`${classes.header_search} ${mobileBar ? `${classes.showSearch}` : ''}`}>
                            <form action="">
                                <input type="search" q="googlesearch" placeholder="Search" />
                                <a href="/"><label htmlFor="search"><FaSearch/></label></a>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 order-first text-center col-sm-3">
                        <Logo link="/" img={logoImg} alt="kababi"/>
                        
                    </div>
                    <div className="col-lg-4 col-12 text-right col-sm-3">
                        <div className={classes.cart_section}>
                            <ul className="list-unstyled">
                                
                                <li className="list-inline-item">
                                    {isAuth ? <Link to="/"><img style={{width: '25px', height: '25px', borderRadius: '50%'}} src={proImg} alt="cart" /></Link> : <Link to="/"><img className={classes.accountImage} src={iconAcount} alt="account" /></Link> }
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/cart"><img src={cartImg} alt="cart" />
                                        <small style={{position: "relative", top: '-10px', left: '-5px',color: 'green'}}> {count} </small>
                                    </Link>
                                </li>

                                <li className={classes.mobileBars} style={{marginLeft: '7px'}}>
                                    <Link to="/" onClick={(e) => searchStatus(e)}><FaSearch style={{fontSize: '20px'}}></FaSearch></Link>
                                </li>

                                <li className={classes.mobileBars}  style={{marginLeft: '20px'}}>
                                    <Link to="/" onClick={(e) => callSidebar(e)}><FaBars style={{fontSize: '20px'}}></FaBars></Link>
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