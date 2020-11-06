

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import { LogOut } from '../../e-store/actions/index';
import classes from './Navbar.module.css';


const Navbar = (props) => {

    const UserInfo = useSelector(state => state.UserReducer)
    const { error, isAuth, loading } = UserInfo;
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

    const LogoutHandler = (e) => {
        e.preventDefault();
        dispatch(LogOut())
        props.history.push("/")
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
                                        return <li key={index} className="list-inline-item"><NavLink activeStyle={{color: 'green'}} to="/logout" exact={(nav.link==="/")} className="d-block" onClick={(e) => LogoutHandler(e)}> Logout </NavLink></li>
                                    }

                                    return <li key={index} className="list-inline-item"><NavLink activeStyle={{color: 'green'}} to={nav.link} exact={(nav.link==="/")} className="d-block active"> {nav.name} </NavLink></li>
                                })
                            }
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Navbar);