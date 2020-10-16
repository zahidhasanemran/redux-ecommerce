import React, { Component } from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import SingleProduct from '../../../component/singleProduct/SingleProduct';
import style from './NewArival.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SlicArrow from '../../../component/ui/favIcon/SlicArrow/SlicArrow'
import { connect } from 'react-redux';



class NewArival extends Component {

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

        return (
            <div className={`${style.newarrival_section} mt-4`}>
            <div className="section_heading pb-5 pt-4 pl-md-3 pr-md-5">
                <SectionTitle sectionTitle="New Arrivals" /> 
            </div>
            <div className={style.newArrivalSlider}>
            <Slider {...settings}>

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

        );
    }
}


const mapStateToProps = state => {
    return {
        newArriaval: state.ProductReducer.newProducts,
    }
}

export default connect(mapStateToProps)(NewArival);
