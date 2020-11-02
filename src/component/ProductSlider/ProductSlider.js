import React, { Component } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import SingleProduct from '../singleProduct/SingleProduct';
import style from './ProductSlider.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SlicArrow from '../ui/favIcon/SlicArrow/SlicArrow'
import { Transition } from 'react-transition-group';




class ProductSlider extends Component {

    render() {

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
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            cssEase: "linear",
            prevArrow: <PrevButton />,
            nextArrow: <NextButton />,
            // nextArrow: <button className="slick-next EMRAN"></button>,
            // prevArrow: <button className="slick-prev"></button>
            
        };

        const duration = 1000;

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

            <Transition in={this.props.sliderProduct.length > 0} timeout={duration} mountOnEnter unmountOnExit>
                {state => (
                    <div className="container px-0" style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                        
                    }}>

                    <div className={`${style.newarrival_section} mt-4`}>
                        <div className="section_heading pb-5 pt-4 pl-md-3 pr-md-5">
                            <SectionTitle sectionTitle={this.props.title} /> 
                        </div>
                        <div className={style.newArrivalSlider2}>

                        <Slider {...settings}>

                            {
                                this.props.sliderProduct.map(prod => {
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




export default ProductSlider;
