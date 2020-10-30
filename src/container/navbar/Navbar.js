

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { GetLogOut } from '../../e-store/actions/UserCreator';
import classes from './Navbar.module.css';


const Navbar = () => {

    const UserInfo = useSelector(state => state.UserReducer)
    const {error, isAuth, loading, userInfo: {id, email, name, isAdmin}} = UserInfo;
    // console.log(isAuth);
    const dispatch = useDispatch();
    const [navItems, setNavItems] = useState(
        [
            {id: 1, name: "Home", link:"/"},
            {id: 2, name: "Shop", link:"/shop"},
            {id: 3, name: "Contact", link:"/contact"},
            {id: 4, name: "About", link:"/about"},
            // {id: 5, name: "Orders", link:"/orders"},
            // {id: 6, name: "Checkout", link:"/checkout"},
            {id: 7, name: "Login", link:"/login"},
        ]
    )  

    const LogOutHangler = (e) => {
        e.preventDefault();
        dispatch(GetLogOut());
    }



    return (
        <div className={classes.menu_bar}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <ul className="list-unstyled">
                            {
                                navItems.map((nav, index) => {
                                    
                                    if(nav.link === "/login" && isAuth === true){
                                        return <li key={index} className="list-inline-item"><Link to="/" onClick={(e) => LogOutHangler(e)} exact={(nav.link==="/").toString()} className="d-block"> Logout </Link></li>
                                    }
                                    

                                    return <li key={index} className="list-inline-item"><Link to={nav.link} exact={(nav.link==="/").toString()} className="d-block active"> {nav.name} </Link></li>
                                })
                            }
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;