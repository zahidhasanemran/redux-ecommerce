import React, { Fragment } from 'react';
// import pro6 from '../../assets/img/product6.jpg'
import AddtoCart from '../ui/button/AddtoCart';
import style from './SingleProduct.module.css';
// import { FaSearchPlus, FaHeart, FaStar } from 'react-icons/fa';
import ProductTitle from '../ui/title/ProductTitle';
import Reviews from '../Reviews/Reviews';
import Price from '../ui/price/Price';




function SingleProduct({img,title,price, id}) {
    return (
        <Fragment>
            <div className={style.img_box}>
                <img src={img} alt="" />
                
                
                <div className={style.hover_section}>
                    <div className={`${style.hover_two} h-100 w-100`}>
                        {/* <ul className="list-unstyled text-right">
                            <li className="mt-3">
                                <p className="pl-3">Quick Vew</p>
                                <a href="/"><FaSearchPlus /></a>
                            </li>
                            <li className="mt-3">
                                <p>Wish List</p>
                                <a href="/"><FaHeart /> </a>
                            </li>
                            <li className="mt-3">
                                <p>Compare</p>
                                <a href="/"><FaStar /> </a>
                            </li>
                        </ul> */}
                        <AddtoCart id={id} />
                    </div>
                </div>
            </div>
            
            <div className={`${style.add_to} text-center`}>
                <ProductTitle id={id} title={title} />
                <Reviews />
                <Price dam={price} />
            </div>

        </Fragment>
    );
}

export default SingleProduct;