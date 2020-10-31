import React from 'react';
import style from './ShopProducts.module.css'
import './ShopProducts.module.css'
import SectionTitle from '../../../component/SectionTitle/SectionTitle'
import SingleProduct from '../../../component/singleProduct/SingleProduct'
import { useSelector } from 'react-redux';
import ProductPlaceholder from '../../../component/Placeholder/ProductPlaceholder/ProductPlaceholder';



const ShopProducts = () => {

    const shopFilter = useSelector(state => state.ProductReducer.shopFilter);
    const loading = useSelector(state => state.ProductReducer.loading);

    let placeCo = 6;

    const lodingPlaceholder = loading && [...Array(placeCo).keys()].map(pc => {
        return <div className={`${style.single_product} col-md-4 sidebar_two`} key={pc}>
            <ProductPlaceholder />
        </div>
    })
    

    return (
        <div className={style.ShopProducts}>
            <SectionTitle sectionTitle="Shop" />
            <div className={`${style.Products} row`}>
                {lodingPlaceholder}
                {shopFilter.map(pro => {
                    return (
                        <div className="col-lg-4" key={pro.id}>
                            <SingleProduct 
                                img={pro.image}
                                title={pro.title}
                                price={pro.price}
                                id={pro.id}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ShopProducts;