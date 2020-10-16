import React, {Fragment } from 'react';
import BestSeller from './BestSeller/BestSeller';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';
import TodaysDeal from './HomeSidebar/TodaysDeal/TodaysDeal';
import NewArival from './NewArival/NewArival';
import SeasonSeller from './SeasonSeller/SeasonSeller';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductRequested} from '../../e-store/actions/index';




function HomePage() {

    // const products = useSelector(state => state.ProductReducer.products);
    // console.log(products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ProductRequested());
    }, []);

    return (
        <Fragment>
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

