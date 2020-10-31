import React, { Fragment } from 'react';
import { FaStar } from 'react-icons/fa';
import style from './ProductPlaceholder.module.css'





const ProductPlaceholder = () => {
    return (
        <Fragment>
            <div className={style.product_box}>
                            <div className={style.product_img}></div>
                        </div>
                        <div className={`${style.add_to} text-center`}>
                            <h5 className={style.product_title}></h5>
                            <ul className={style.stars}>
                                <li className="list-inline-item">
                                    <FaStar className={style.star} />
                                </li>
                                <li className="list-inline-item">
                                    <FaStar className={style.star} />
                                </li>
                                <li className="list-inline-item">
                                    <FaStar className={style.star} />
                                </li>
                                <li className="list-inline-item">
                                    <FaStar className={style.star} />
                                </li>
                                <li className="list-inline-item">
                                    <FaStar className={style.star} />
                                </li>
                            </ul>
                            <h5 className={style.product_title}></h5>
                        </div>
        </Fragment>
    );
};

export default ProductPlaceholder;