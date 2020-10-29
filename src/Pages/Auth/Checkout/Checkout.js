import React, {useState } from 'react';
import style from '../Login/Login.module.css'

import {saveShipping} from '../../../e-store/actions/index'
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../../../component/Wizerd/Checkout/CheckoutSteps';


const Checkout = (props) => {

    const dispatch = useDispatch();
    // const RegisterUser = useSelector(state => state.RegisterReducer)
    // // console.log(RegisterUser);
    // const {loading, regInfo: {name, email, isAdmin}, error, isRegistered} = RegisterUser;
    // console.log(email, name);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShipping(address, city, country, pcode))
        props.history.push('/payment')
    }
    

    


    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [pcode, setPcode] = useState('')
    



    return (<div>
            <CheckoutSteps step1 step2 />
            <div className={style.Login}>
                <div className={style.img_section}>
                    <h5>Shipping </h5>
                </div>
                <form onSubmit={submitHandler}>

                    <div className={style.single_form}>
                        <input type="text" placeholder="Address" id="address" onChange={(e) => setAddress(e.target.value)} />
                    </div>

                    <div className={style.single_form}>
                        <input type="text" placeholder="City" id="city" onChange={(e) => setCity(e.target.value)} />
                    </div>

                    <div className={style.single_form}>
                        <input type="text" placeholder="Country" id="country" onChange={(e) => setCountry(e.target.value)} />
                    </div>

                    <div className={style.single_form}>
                        <input type="text" placeholder="Pcode" id="pcode" onChange={(e) => setPcode(e.target.value)} />
                    </div>

                    

                    <div className={`${style.single_form} text-center`}>
                        <button className="defBtn" type="submit">Continue</button>
                    </div>

                    


                </form>
            </div>
        </div>
    );
};

export default Checkout;