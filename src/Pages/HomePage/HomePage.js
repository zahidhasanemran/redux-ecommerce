import React, {Fragment } from 'react';
import BestSeller from './BestSeller/BestSeller';
import TodaysDeal from './HomeSidebar/TodaysDeal/TodaysDeal';
import NewArival from './NewArival/NewArival';
import SeasonSeller from './SeasonSeller/SeasonSeller';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BestProductFilter, FeaturedProductFilter, NewProductFilter, SetFilterProduct } from '../../e-store/actions';
import ProductSlider from '../../component/ProductSlider/ProductSlider';
import Notifier from '../../component/ui/Notifier/Notifier';
import HomeSlider from './HomeSlider/HomeSlider';





function HomePage() {

    const products = useSelector(state => state.ProductReducer.products);
    const loading = useSelector(state => state.ProductReducer.loading);
    const featuredFiltered = useSelector(state => state.ProductReducer.featuredFiltered);
    const isAuth = useSelector(state => state.UserReducer.isAuth);
    // console.log(loading);

    
    const dispatch = useDispatch();

    const chainDis = async function f() {
        if(!loading){
            // dispatch(SaveProductCategory(products));
            dispatch(BestProductFilter(products));
            dispatch(NewProductFilter(products));
            dispatch(FeaturedProductFilter(products));
            dispatch(SetFilterProduct(products));
        } 
    }
      

    useEffect(()  => {
        chainDis();
    }, [loading]);

    return (
        <Fragment>
            {/* {loading ? <p>loading</p> : <p>done</p> } */}
            {isAuth && <Notifier show={isAuth} text="Successfuly Logged In."></Notifier> }
                <HomeSlider></HomeSlider>
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
                
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-12">
                            <ProductSlider title="Featured Products" sliderProduct={featuredFiltered} />
                        </div>
                    </div>
                </div>
            </Fragment>
    );
}

export default HomePage;

