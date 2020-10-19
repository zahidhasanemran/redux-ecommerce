import React, {Fragment } from 'react';
import BestSeller from './BestSeller/BestSeller';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import TodaysDeal from './HomeSidebar/TodaysDeal/TodaysDeal';
import NewArival from './NewArival/NewArival';
import SeasonSeller from './SeasonSeller/SeasonSeller';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BestProductFilter, FeaturedProductFilter, NewProductFilter, SaveProductCategory } from '../../e-store/actions';





function HomePage() {

    const products = useSelector(state => state.ProductReducer.products);
    const loading = useSelector(state => state.ProductReducer.loading);
    // console.log(loading);

    
    const dispatch = useDispatch();

    const chainDis = async function f() {
        if(!loading){
            dispatch(SaveProductCategory(products));
            dispatch(BestProductFilter(products));
            dispatch(NewProductFilter(products));
            dispatch(FeaturedProductFilter(products));
        } 
    }
      

    useEffect(()  => {
        chainDis();
    }, [loading]);

    return (
        <Fragment>
            {/* {loading ? <p>loading</p> : <p>done</p> } */}
                <div className="shop_section_one pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <TodaysDeal />
                            </div>
                            <div className="col-md-8">
                                <BestSeller />
                                <SeasonSeller />
                                <NewArival />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <FeaturedProduct />
                        </div>
                    </div>
                </div>
            </Fragment>
    );
}

export default HomePage;

