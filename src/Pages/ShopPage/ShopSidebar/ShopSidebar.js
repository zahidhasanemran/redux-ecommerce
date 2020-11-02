import React from 'react';
import style from './ShopSidebar.module.css';
import Category from '../../HomePage/BestSeller/Category/Category';
import SidebarTitle from '../../../component/SidebarTitle/SidebarTitle';
import { ShopProFilter } from '../../../e-store/actions/index';
import { useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';


function ShopSidebar() {

    const loading = useSelector(state => state.ProductReducer.loading);
    const duration = 400;

    const defaultStyle = {
    transition: `left ${duration}ms ease-in-out`,
        left: '-20px',
        position: 'relative'
    }

    const transitionStyles = {
        entering: { 
            left: '-20px'
        },
        entered:  { 
            left: '0px'
        },
        exiting:  { 
            left: '-10px'
        },
        exited:  { 
            left: '-20px'
        },
    };

    return (

        <Transition in={!loading} timeout={duration} mountOnEnter unmountOnExit>
        {state => (
            <div className="" style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
                <div className={style.shopSidebar}>
                    <div className={style.singleSidebar}>
                        <SidebarTitle title="Category" />
                        <ul className="list-unstyled item_filters">
                            <Category proFilter={ShopProFilter} classes="text-capitalize" shopSidebarCat="shopSidebarCat"/>
                        </ul>
                    </div>
                </div>
            </div>
        )}
        </Transition>

        
    );
}

export default ShopSidebar;