import React from 'react';
import SinglerCart from './SinglerCart/SinglerCart';
import OrderDetails from './OrderDetails/OrderDetails';
import { useSelector } from 'react-redux';



const CartPage = () => {

    const cart = useSelector(state => state.ProductReducer.cart);
    
    // const cart = useSelector(state => state.ProductReducer.cart);
    let products = useSelector(state => state.ProductReducer.products);
    let count = useSelector(state => state.ProductReducer.count)

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    {cart.map(sc => <SinglerCart 
                        img={sc.image} 
                        id={sc.id} 
                        title={sc.title} 
                        total={sc.total} 
                        qty={sc.qty}
                        cart={cart}
                        products={products}
                        count={count}
                        key={sc.id}
                    /> )}
                </div>
                <div className="col-lg-4">
                    <OrderDetails /> 
                </div>
            </div>
        </div>
    );
};

export default CartPage;