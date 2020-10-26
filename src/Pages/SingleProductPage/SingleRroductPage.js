import React from 'react';
import style from './SingleRroductPage.module.css';
import Reviews from '../../component/Reviews/Reviews';
import AddtoCart from '../../component/ui/button/AddtoCart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDetailsProduct, RelatedProduct} from '../../e-store/actions';
import { Link } from 'react-router-dom';
// import Qty from '../../component/Qty/Qty';
import ProductSlider from '../../component/ProductSlider/ProductSlider'


const SingleRroductPage = (props) => {

    let proId = props.match.params.id;
    // const cart = useSelector(state => state.ProductReducer.cart);
    // let products = useSelector(state => state.ProductReducer.products);

    // const cart = useSelector(state => state.ProductReducer.cart);
    // const count = useSelector(state => state.ProductReducer.count);
    const products = useSelector(state => state.ProductReducer.products);
    const relatedProduct = useSelector(state => state.ProductReducer.relatedProduct);
    const relatedProFilter = useSelector(state => state.ProductReducer.relatedProFilter);

    console.log(relatedProFilter);

    let detailsProduct = useSelector(state => state.ProductReducer.detailsProd);
    let category = detailsProduct.map(x => x.category).toString();
    // console.log("category " + category);
    let loading = useSelector(state => state.ProductReducer.loading);
    const dispatch = useDispatch();

   
    const chainDis = async function f() {
        if(!loading){
            dispatch(getDetailsProduct(products, proId))
            dispatch(RelatedProduct(category, relatedProduct))
        }
    }

    useEffect(() => {
        chainDis()
    }, [loading, relatedProduct, category]);
    

    return (
        

            detailsProduct.map((x, index) => {
                // console.log(detailsProduct);
                return (
                    <div className={style.SingleRroductPage} key={index}>
                        <div>
                            <div className={`${style.SingleProductTop} container`}>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className={style.SingleRroductImg}>
                                            <img src={x.image} alt="" />
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
                                                {/* <Qty qty={x.qty} products={products} cart={cart} count={count} /> */}
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
                        <div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <ProductSlider title="Related Product" sliderProduct={relatedProFilter} /> 
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