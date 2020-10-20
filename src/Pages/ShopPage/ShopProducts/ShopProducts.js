import React from 'react';
import style from './ShopProducts.module.css'
import SectionTitle from '../../../component/SectionTitle/SectionTitle'
import SingleProduct from '../../../component/singleProduct/SingleProduct'
import { useSelector } from 'react-redux';



const ShopProducts = () => {

    let products = useSelector(state => state.ProductReducer.products);
    const shopFilter = useSelector(state => state.ProductReducer.shopFilter);
    console.log(shopFilter);
    console.log(products);

    return (
        <div className={style.ShopProducts}>
            <SectionTitle sectionTitle="Shop" />
            <div className={`${style.Products} row`}>
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