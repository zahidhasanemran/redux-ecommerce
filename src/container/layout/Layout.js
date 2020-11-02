import React from 'react';

import Topbar from '../../component/header/topbar/Topbar';
// import Footer from '../Footer/Footer';
import Navbar from '../navbar/Navbar';




function Layout(props) {

    return (
        <div>
            <Topbar />
            <Navbar />
            {props.children}
            {/* <Footer/> */}
        </div>
    );
}

export default Layout;