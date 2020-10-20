import React from 'react';
import ShopProducts from './ShopProducts/ShopProducts';
import ShopSidebar from './ShopSidebar/ShopSidebar';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SetFilterProduct } from '../../e-store/actions/index';




const ShopPage = () => {

    const products = useSelector(state => state.ProductReducer.products);
    
    const loading = useSelector(state => state.ProductReducer.loading);
    // console.log(products);

    const dispatch = useDispatch();

    const chainDis = async function f() {
        if(!loading){
            dispatch(SetFilterProduct(products));
        } 
    }

    useEffect(() => {
        chainDis()
    }, [loading]);


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <ShopSidebar />
                </div>
                <div className="col-lg-9">
                    <ShopProducts/>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;

