import React, { Component, Fragment } from 'react';
import style from './Footer.module.css'
import footerLogo from '../../assets/img/footer-logo.png'
import { Link } from 'react-router-dom';
import bimg2 from '../../assets/img/blog-img2.jpg'
import bimg1 from '../../assets/img/blog-img1.jpg'
import pay1 from '../../assets/img/payment-1.png'
import pay2 from '../../assets/img/payment-2.png'
import pay3 from '../../assets/img/payment-3.png'
import pay4 from '../../assets/img/payment-4.png'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaMobileAlt, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';


class footer extends Component {

    state = {
        siteLink: [
            {id: 1, name: "Home", link:"/"},
            {id: 2, name: "Shop", link:"/shop"},
            {id: 3, name: "Contact", link:"/contact"},
            {id: 4, name: "About", link:"/about"},
            {id: 5, name: "Orders", link:"/orders"},
            {id: 6, name: "Checkout", link:"/checkout"}
        ],
        myAcount: [
            {id: 1, name: "Login", link:"/login"},
            {id: 2, name: "Account", link:"/shop"},
            {id: 3, name: "Contact", link:"/contact"},
            {id: 4, name: "About Us", link:"/about"},
            {id: 5, name: "Orders", link:"/orders"},
            {id: 6, name: "Checkout", link:"/checkout"}
        ],
        advisor: [
            {id: 1, name: "Information", link:"/"},
            {id: 2, name: "Discount", link:"/shop"},
            {id: 3, name: "Faq", link:"/contact"},
            {id: 4, name: "Terms & Conditions", link:"/about"},
            {id: 5, name: "Order History", link:"/orders"},
            {id: 6, name: "Coupon", link:"/checkout"}
        ],
        popularPost: [
            {id: 1, image: bimg2, title: 'Standard blog post with photo', link:'/'},
            {id: 2, image: bimg1, title: 'Standard blog post with photo', link:'/'},
            {id: 3, image: bimg2, title: 'Standard blog post with photo', link:'/'},
            {id: 4, image: bimg1, title: 'Standard blog post with photo', link:'/'},
            {id: 5, image: bimg2, title: 'Standard blog post with photo', link:'/'},
        ],
        socilMedia: [
            {id: 1, link:'/', icon: FaFacebook, title:"facebook"},
            {id: 2, link:'/', icon: FaTwitter, title:"twitter"},
            {id: 3, link:'/', icon: FaPinterest, title:"Pinterest"},
            {id: 4, link:'/', icon: FaInstagram, title:"instagram"},
            {id: 5, link:'/', icon: FaYoutube, title:"youtube"},
            {id: 6, link:'/', icon: FaLinkedin, title:"facebook"}
        ],
        paymentMethod: [
            {id: 1, image: pay1, title:"visa", link:"/"},
            {id: 2, image: pay2, title:"paypal", link:"/"},
            {id: 3, image: pay3, title:"american express", link:"/"},
            {id: 4, image: pay4, title:"master card", link:"/"},
        ],
        personalInfo: [
            {id: 1, icon: FaMapMarkerAlt, title: '123 Main Street, Anytown, CA 12345 USA' },
            {id: 2, icon: FaMobileAlt, title: '+880 1628 679492' },
            {id: 3, icon: FaEnvelope, title: 'zahidhasanemran@gmail.com' },
        ]
    }

    render() {
        return (
            <Fragment>
                <div className={style.footer_section}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className={style.footer_logo}>
                                    <div><img src={footerLogo} alt="navias" /></div>
                                    <ul className="list-unstyled pt-5">
                                        {this.state.personalInfo.map(pa => {
                                            return (
                                                <li className={`${style.media} mb-4 d-flex  mt-2` } key={pa.id}>
                                                    <pa.icon className=""/>
                                                    <p className="media-body pl-2"> {pa.title} </p>
                                                </li>
                                            )
                                        })}
                                        

                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="center_footer">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <h4 className="font-weight-bold mb-4">My Account</h4>
                                            <ul className="list-unstyled">
                                                {this.state.myAcount.map(ma => {
                                                    return (
                                                        <li className="mb-3" key={ma.id}>
                                                            <Link to={ma.link}> {ma.name} </Link>
                                                        </li>
                                                    )
                                                })}
                                               
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <h4 className="font-weight-bold mb-4">Style Advisor</h4>
                                            <ul className="list-unstyled">
                                                {this.state.advisor.map(sa => {
                                                    return (
                                                        <li className="mb-3" key={sa.id}>
                                                            <Link to={sa.link}> {sa.name} </Link>
                                                        </li>
                                                    )
                                                })}
                                                
                                            </ul>
                                        </div>
                                        <div className="col-md-4">
                                            <h4 className="font-weight-bold mb-4">My Account</h4>
                                            <ul className="list-unstyled">
                                                {this.state.myAcount.map(ma => {
                                                    return (
                                                        <li className="mb-3" key={ma.id}>
                                                            <Link to={ma.link}> {ma.name} </Link>
                                                        </li>
                                                    )
                                                })}
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className={style.footer_right}>
                                    <h4 className="font-weight-bold mb-3">Popular Post</h4>
                                    <ul className="list-unstyled">
                                        {this.state.popularPost.map(ma => {
                                            return (
                                                <li className="media mb-3" key={ma.id}>
                                                    <img src={ma.image} className="d-flex mr-3" alt={ma.title} />
                                                    <p className="media-body"> {ma.title} </p>
                                                </li>
                                            )
                                        })}
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-5 pb-5">
                            <div className="col-md-4 col-xs-12">
                                <form>
                                    <li className={`${style.email_form} media`} >
                                        <input type="email" placeholder="Enter your email address" />
                                        <input type="submit" value="Subscribe" />
                                    </li>
                                </form>
                            </div>
                            <div className="col-md-4 text-center">
                                <ul className="list-unstyled">
                                    {this.state.paymentMethod.map(sm => {
                                        return (
                                            <li className="list-inline-item mr-1" key={sm.id}>
                                                <img src={sm.image} alt={sm.title} />
                                            </li>
                                        )
                                    })}
                                    
                                </ul>
                            </div>
                            <div className={`${style.social} col-md-4 text-md-right `}>
                                <ul className="list-unstyled">

                                    {this.state.socilMedia.map(smi => {
                                        return(
                                            <li className="list-inline-item" key={smi.id}>
                                                <Link to={smi.link}> <smi.icon /> </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                
                </div>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p>© 2012 Magikcommerce. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>

            </Fragment>
        );
    }
}

export default footer;