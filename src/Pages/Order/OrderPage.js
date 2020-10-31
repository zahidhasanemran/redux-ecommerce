import React from 'react';
import OrderDetails from '../CartPage/OrderDetails/OrderDetails';
import SinglerCart from '../CartPage/SinglerCart/SinglerCart';
import { useSelector } from 'react-redux';
import style from './OrderPage.module.css'
import CheckoutSteps from '../../component/Wizerd/Checkout/CheckoutSteps';


const OrderPage = (props) => {

    const user = useSelector(state => state.UserReducer);
    const pros = useSelector(state => state.ProductReducer);
    const {cart, count} = pros
    const {isAuth, loading, paymentMethod, shipping, userInfo} = user;
    // console.log(pros);
    // console.log(shipping);
    
    const checkoutButtonPath = props.match.path;

    if(!shipping){
        props.history.push('/shipping')
    }
    if(!paymentMethod){
        props.history.push('/payment')
    }
    

    return (
        <div className="container">
            <div className="row">
                <CheckoutSteps step1 step2 step3 step4/> 
            </div>
            <div className="row pt-5">
                <div className="col-lg-8">
                    <div className={style.placeorder}>
                        <div className={style.list}>
                            <div>
                                <h3>Shipping </h3>
                            </div>
                            <div>
                                {
                                   shipping && 
                                        <ul>
                                            <li>Address: {shipping.address} </li>
                                            <li>City: {shipping.city} </li>
                                            <li>Postal Code: {shipping.pcode} </li>
                                            <li>Country: {shipping.country} </li>
                                        </ul>
                                        
                                
                                }
                            </div>
                        </div>
                        <div className={`${style.list} mb-5`}>
                            <div>
                                <h3>Payment Method </h3>
                            </div>
                            <div>
                                <p>{paymentMethod ? paymentMethod : ''} </p>
                            </div>
                        </div>
                        <div className={style.list}>
                            <div>
                                <h3>Cart Items </h3>
                            </div>
                            <div>
                                {cart.map(sc => <SinglerCart 
                                    img={sc.image} 
                                    id={sc.id} 
                                    title={sc.title} 
                                    total={sc.total} 
                                    qty={sc.qty}
                                    cart={cart}
                                    products={sc}
                                    count={count}
                                    key={sc.id}
                                /> )}
                            </div>
                        </div>
                    </div>

                    
                </div>
                <div className="col-lg-4">
                    <OrderDetails btnPath={checkoutButtonPath} /> 
                </div>
            </div>
        </div>
    );
};

export default OrderPage;