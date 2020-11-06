import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import slide1 from '../../../assets/img/slide-img1.jpg'
import slide2 from '../../../assets/img/slide-img2.jpg'
import style from './HomeSlider.module.css'

const HomeSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 7000,
        fade: true
    };

    const slideItems = [
        {id: 1, image: slide1, link: '/'},
        {id: 2, image: slide2, link: '/'}
    ]



    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className={style.slider_wrapper}>
                    <Slider {...settings}>

                        {
                            slideItems.map(prod => {
                                return(
                                    <div className={style.single_slide} key={prod.id}>
                                        <img src={prod.image} alt=""/>
                                    </div>
                                )
                            })
                        } 
                    </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSlider;