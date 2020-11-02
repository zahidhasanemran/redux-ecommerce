import React, { Component } from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import SingleProduct from '../../../component/singleProduct/SingleProduct';
import style from './NewArival.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SlicArrow from '../../../component/ui/favIcon/SlicArrow/SlicArrow'
import { connect } from 'react-redux';
import ProductPlaceholder from '../../../component/Placeholder/ProductPlaceholder/ProductPlaceholder';
import { Transition } from 'react-transition-group';


class NewArival extends Component {

    render() {

        let placeCo = 6;

        const lodingPlaceholder = this.props.loading && [...Array(placeCo).keys()].map(pc => {
            return <div className={style.single_slide} key={pc}>
                        <div className={`${style.single_product} sidebar_two`}>
                            <ProductPlaceholder/>
                        </div>
                    </div>
        })

        function PrevButton({ onClick }) {
            return <button onClick={onClick} className={style.slickprev} > <SlicArrow /> </button>;
          }
      
          function NextButton({ onClick }) {
            return <button onClick={onClick} className={style.slicknext}>  <SlicArrow left/> </button>;
          }
        
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            cssEase: "linear",
            prevArrow: <PrevButton />,
            nextArrow: <NextButton />,
            // nextArrow: <button className="slick-next EMRAN"></button>,
            // prevArrow: <button className="slick-prev"></button>
            
        };


        const duration = 500;

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

            <Transition in={!this.props.loading} timeout={duration} mountOnEnter unmountOnExit>
                {state => (
                    <div className="container px-0" style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                        
                    }}>
                        
                        <div className={`${style.newarrival_section} mt-4`}>
                            <div className="section_heading pb-5 pt-4 pl-md-3 pr-md-5">
                                <SectionTitle sectionTitle="New Arrivals" /> 
                            </div>
                            <div className={style.newArrivalSlider}>
                            <Slider {...settings}>
                                {lodingPlaceholder}
                                {
                                    this.props.newArriaval.map(prod => {
                                        return(
                                            <div className={style.single_slide} key={prod.id}>
                                                <div className={`${style.single_product} sidebar_two`}>
                                                    <SingleProduct
                                                        img={prod.image}
                                                        title={prod.title}
                                                        price={prod.price}
                                                        id={prod.id}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                            </div>
                        </div>

                    </div>
                )}
            </Transition>






            

        );
    }
}


const mapStateToProps = state => {
    return {
        newArriaval: state.ProductReducer.newProducts,
        loading: state.ProductReducer.loading,
    }
}

export default connect(mapStateToProps)(NewArival);
