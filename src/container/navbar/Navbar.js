import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import classes from './Navbar.module.css';

class Navbar extends Component {

    state = {
        navItems: [
            {id: 1, name: "Home", link:"/"},
            {id: 2, name: "Shop", link:"/shop"},
            {id: 3, name: "Contact", link:"/contact"},
            {id: 4, name: "About", link:"/about"},
            {id: 5, name: "Orders", link:"/orders"},
            {id: 6, name: "Checkout", link:"/checkout"},
        ]
    }



    render() {
        
        return (
            <div className={classes.menu_bar}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <ul className="list-unstyled">
                                {
                                    this.state.navItems.map((nav, index) => {
                                        return <li key={index} className="list-inline-item"><Link to={nav.link} exact={(nav.link==="/").toString()} className="d-block active"> {nav.name} </Link></li>
                                    })
                                }
                                
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Navbar;