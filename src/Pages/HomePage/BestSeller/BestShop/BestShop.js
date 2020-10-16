import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleProduct from '../../../../component/singleProduct/SingleProduct';
import style from './BestShop.module.css';


class BestShop extends Component {
    
    render() {

          
        return (
            <div className={`${style.best_shop} row`}>

                {
                    this.props.bestFilterProduct.map(prod => {
                        return(
                            <div className={`${style.single_product} col-md-4 sidebar_two`} key={prod.id}>
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
    
    return {
        bestFilterProduct: state.ProductReducer.bestFiltered

    }
}





export default connect(mapStateToProps)(BestShop);






