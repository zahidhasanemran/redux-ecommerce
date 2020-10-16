import React, { Component } from 'react';
import style from './BestSeller.module.css';
import BestShop from './BestShop/BestShop';
import Category from './Category/Category';
import SectionTitle from '../../../component/SectionTitle/SectionTitle'
import { BestProCatFilter } from '../../../e-store/actions/ProductCreator';



class BestSeller extends Component {
    render() {
        return (
            <div className={style.best_shop_section}>
                <div className={`${style.best_heading} d-sm-flex justify-content-between pb-5 pt-4 pl-md-3 pr-md-5`}>
                    <SectionTitle sectionTitle="Best Sellers" />
                    <ul className="list-unstyled item_filters d-flex align-items-center">
                       <Category proFilter={BestProCatFilter} classes="list-inline-item text-capitalize"/>
                    </ul>
                </div>
                <BestShop/>
            </div>
        );
    }
}

export default BestSeller;