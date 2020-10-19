import React from 'react';
import style from './SingleRroductPage.module.css';
import Reviews from '../../component/Reviews/Reviews';
import AddtoCart from '../../component/ui/button/AddtoCart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SingleProductRequested, productCountIncrement, productCountDecrement } from '../../e-store/actions';
import { Link } from 'react-router-dom';



const SingleRroductPage = (props) => {
    const cart = useSelector(state => state.ProductReducer.cart);
    let proId = props.match.params.id;
    let detailsProduct = useSelector(state => state.ProductReducer.detailsProd);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(SingleProductRequested(proId))
    }, [cart]);

    

    return (
        

            detailsProduct.map((x, index) => {
                // console.log(cart);
                return (
                    <div className={style.SingleRroductPage} key={index}>
                    <div>
                        <div className={`${style.SingleProductTop} container`}>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className={style.SingleRroductImg}>
                                        <img src={x.image} alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className={style.ProductDetails}>
                                        <h4> {x.title} </h4>
        
                                        <div className={style.reviews}>
                                            <Reviews />
                                            <Link to="/"> {x.category} </Link>
                                        </div>
        
                                        <div className={style.price}>
                                            <p> $ <strong> {x.price} </strong> </p>
                                        </div>
        
                                        <div className={style.Overview}>
                                            <h5>Quick Overview </h5>
                                            <p> {x.short_des} </p>
                                        </div>
        
                                        <div className={style.cart_div}>
                                            <div className={style.qty}>
                                                <button onClick={() => dispatch(productCountDecrement(proId))  }> - </button>
                                                <p> {x.qty} </p>
                                                <button  onClick={() => dispatch(productCountIncrement(proId))}> + </button>
                                            </div>
                                            <AddtoCart id={x.id} /> 
                                        </div>
        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`${style.SingleProductBottom} container`}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <h5>About Products </h5>
                                    <p> {x.long_des} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })
        
       
    )
};
export default SingleRroductPage;