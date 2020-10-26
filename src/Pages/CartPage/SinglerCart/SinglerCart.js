import React from 'react';
import style from './SinglerCart.module.css'
import ProductTitle from '../../../component/ui/title/ProductTitle'
import Price from '../../../component/ui/price/Price'
import Qty from '../../../component/Qty/Qty'
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteFromCart } from '../../../e-store/actions/index';




const SinglerCart = ({img, id, title, total, qty}) => {

    const cart = useSelector(state => state.ProductReducer.cart);
    const products = useSelector(state => state.ProductReducer.products);
    const count = useSelector(state => state.ProductReducer.count);
    const dispatch = useDispatch();

    const deleteCart = (e, id, cart, products ) => {
        e.preventDefault();
        dispatch(DeleteFromCart(id, cart, products));
    }


    return (
        <div className={style.SingleCart} key={id}>
            <div className={style.cart_img}>
                <img src={img} alt=""/>
            </div>
            <div className={style.cart_qty_details}>
                <ProductTitle id={id} title={title} />
                <Price dam={total} />
                <Qty qty={qty} products={products} cart={cart} count={count} id={id} />
            </div>
            <div className={style.cart_action}>
                <div className={style.delete_icon}>
                    <Link to="" onClick={(e) => deleteCart(e, id, cart, products)}><FaTrash/> </Link>
                </div>
            </div>
        </div>
    );
};

export default SinglerCart;