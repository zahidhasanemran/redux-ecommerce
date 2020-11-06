import React from 'react';
import { Link } from 'react-router-dom';
import MobileAccordion from './MobileAccordion/MobileAccordion';
import style from './MobileMenu.module.css';
import { FaTimesCircle } from 'react-icons/fa';
const MobileMenu = (props) => {
    
    

    const clas = [`${style.MobileMenu}`, `${props.classes ? `${style.menuactive}` : ''}`].join(" ");
    // console.log(clas);
    
    

    return (
        <div className={`${style.MobileMenu} ${props.classes ? `${style.menuactive}` : ''} `}>
            <div className={style.menu_header}>
                <Link to="" className="d-block text-right" onClick={(e) => props.closeSidebar(e)}>
                    <FaTimesCircle></FaTimesCircle>
                </Link>
            </div>
            <div className={style.menu}>
                <div className={style.signle_menu}>
                    <Link to="/" onClick={() => props.onLinkSidebarClose()}> Home </Link>
                </div>

                <MobileAccordion
                    menuTitle="Men"
                    menus='
                        <li><a onclick={(e) => props.closeSidebar(e)} href="/">Shirt</a></li>
                        <li><a href="/">Shoes</a></li>
                        <li><a href="/">Pant</a></li>
                        <li><a href="/">Watch</a></li>
                    '
                >
                </MobileAccordion>
                <MobileAccordion
                    menuTitle="Woman"
                    menus='
                        <li><a href="/">W-Shirt</a></li>
                        <li><a href="/">Ladies Shoes</a></li>
                        <li><a href="/">Saloar</a></li>
                        <li><a href="/">S-watch</a></li>
                    '
                >
                </MobileAccordion>
                <MobileAccordion
                    menuTitle="Baby"
                    menus='
                        <li><a href="/">Baby Shoes</a></li>
                        <li><a href="/">Baby Shirt</a></li>
                        <li><a href="/">Baby Toy</a></li>
                        <li><a href="/">Baby Food</a></li>
                    '
                >
                </MobileAccordion>
                
                <div className={style.signle_menu}>
                    <Link to="/about" onClick={() => props.onLinkSidebarClose()}> About </Link>
                </div>
                <div className={style.signle_menu}>
                    <Link to="/contact" onClick={() => props.onLinkSidebarClose()}> Contact </Link>
                </div>
                <div className={style.signle_menu}>
                    <Link to="/login" onClick={() => props.onLinkSidebarClose()}> Login </Link>
                </div>
            </div>
            
        </div>
    );

    // return (
    //     <div className={style.MobileMenu}>
    //         <Accordion
    //             title="lorem ipsum dolor ilite orkgo here "
    //             content="Amar sonar bangla ami tomay valobasi"
    //         />
    //         <Accordion
    //             title="lorem ipsum dolor ilite orkgo here 2"
    //             content="
    //                 <p>Amar sonar bangla ami tomay valobasi Amar sonar bangla ami tomay valobasi Amar sonar bangla ami tomay valobasi</p>
    //             "
    //         />
    //         <Accordion
    //             title="lorem ipsum dolor ilite orkgo here 3"
    //             content="
    //                 <h6>Amar sonar bangla ami</h6>
    //                 <ul class='hello'>
    //                      <li><Link>Shoes</Link></li>
    //                      <li><Link>Shirt</Link></li>
    //                      <li><Link>Cloth</Link></li>
    //                      <li><Link>Watch</Link></li>
    //                  </ul>
    //             "
    //         />
    //     </div>
    // )

    
};

export default MobileMenu;