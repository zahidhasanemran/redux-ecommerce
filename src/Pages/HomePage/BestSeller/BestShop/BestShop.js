import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductPlaceholder from '../../../../component/Placeholder/ProductPlaceholder/ProductPlaceholder';
import SingleProduct from '../../../../component/singleProduct/SingleProduct';
import style from './BestShop.module.css';


class BestShop extends Component {

    render() {

        let placeCo = 6;

        const lodingPlaceholder = this.props.loading && [...Array(placeCo).keys()].map(pc => {
            return <div className={`${style.single_product} col-lg-4 col-md-6 sidebar_two`} key={pc}>
                <ProductPlaceholder />
            </div>
        })
        
        return (
            <div className={`${style.best_shop} row`}>
                {lodingPlaceholder}
                {
                    this.props.bestFilterProduct.map(prod => {
                        return(
                            <div className={`${style.single_product} col-lg-4 col-md-6 sidebar_two`} key={prod.id}>
                                <SingleProduct
                                    img={prod.image}
                                    title={prod.title}
                                    price={prod.price}
                                    id={prod.id}
                                />
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state.ProductReducer);
    return {
        bestFilterProduct: state.ProductReducer.bestFiltered,
        loading: state.ProductReducer.loading

    }
}





export default connect(mapStateToProps)(BestShop);






