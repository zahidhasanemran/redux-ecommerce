import React from 'react';
import style from './ShopSidebar.module.css';
import Category from '../../HomePage/BestSeller/Category/Category';
import SidebarTitle from '../../../component/SidebarTitle/SidebarTitle';
import { ShopProFilter } from '../../../e-store/actions/index';
import { useSelector } from 'react-redux';




function ShopSidebar() {

    const products = useSelector(state => state.ProductReducer.products);

    return (
        <div className={style.shopSidebar}>
            <div className={style.singleSidebar}>
                <SidebarTitle title="Category" />
                <ul className="list-unstyled item_filters">
                    <Category proFilter={ShopProFilter} classes="text-capitalize" shopSidebarCat="shopSidebarCat"/>
                </ul>
            </div>
        </div>
    );
}

export default ShopSidebar;