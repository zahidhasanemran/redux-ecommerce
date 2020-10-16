import React from 'react';
import ShopProducts from './ShopProducts/ShopProducts';
import ShopSidebar from './ShopSidebar/ShopSidebar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ShopProductRequested } from '../../e-store/actions';



const ShopPage = () => {


    // const products = useSelector(state => state.ProductReducer.products);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ShopProductRequested());
    }, []);


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

