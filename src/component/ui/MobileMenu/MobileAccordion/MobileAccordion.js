import React, { useRef, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import style from './MobileAccordion.module.css'


const MobileAccordion = (props) => {

    const childHeight = useRef(null);
    const [activeClass, setActiveClass] = useState('');
    const [sHeight, setSHeight] = useState('0px');
    const stateChange = (e) => {
        e.preventDefault();
        setActiveClass(activeClass === '' ? 'active' : '');
        setSHeight(activeClass === '' ? `${childHeight.current.scrollHeight}px` : '0px');
    }

    return (
        <div className={`${style.signle_menu} ${activeClass}`}>
            <button className={style.menu_title} onClick={(e) => stateChange(e)}>
                <p> {props.menuTitle}</p>
                <p className="ml-auto">{activeClass ? <FaMinus /> : <FaPlus />}</p>
            </button>
            <ul 
                style={{maxHeight: `${sHeight}`}} 
                className={style.menuList} 
                ref={childHeight}
                dangerouslySetInnerHTML = {{__html: props.menus}}
                
                >
                
            </ul>
        </div>
    );
};

export default MobileAccordion;