import React from 'react';
import ShopProducts from './ShopProducts/ShopProducts';
import ShopSidebar from './ShopSidebar/ShopSidebar';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SetFilterProduct } from '../../e-store/actions/index';
import { Transition } from 'react-transition-group';



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

    
    const duration = 1000;

    const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { 
            opacity: 1
        },
        entered:  { 
            opacity: 1
        },
        exiting:  { 
            opacity: 0
        },
        exited:  { 
            opacity: 0
        },
    };


    return (
        <Transition in={!loading} timeout={duration} mountOnEnter unmountOnExit>
            {state => (
                <div className="container" style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    <div className="row">
                        <div className="col-lg-3">
                            <ShopSidebar />
                        </div>
                        <div className="col-lg-9">
                            <ShopProducts/>
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    );
};

export default ShopPage;

