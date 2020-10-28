import React, { useEffect, useState } from 'react';
import style from '../Login/Login.module.css'
import {savePayment} from '../../../e-store/actions/index'
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../../../component/Wizerd/Checkout/CheckoutSteps';


const Payment = (props) => {

    const dispatch = useDispatch();
    

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePayment(paymentMethod))
        props.history.push('/place-order')
    }

    const [paymentMethod, setPaymentMethod] = useState('')
    



    return (<div>
            <CheckoutSteps step1 step2 step3 />
            <div className={style.Login}>
                <div className="text-left">
                    <h5>Payment Method</h5>
                </div>
                <form onSubmit={submitHandler}>

                    <div className={style.single_form}>
                        <input style={{width: 'auto', marginRight: '20px'}} type="radio" id="paymentMethod" value="Paypal" name="paymentMethod" onChange={(e) => setPaymentMethod(e.target.value)} />
                        <label htmlFor="paymentMethod">Payment Method</label>
                    </div>

                    

                    

                    <div className={`${style.single_form} text-center`}>
                        <button type="submit">Continue</button>
                    </div>

                    


                </form>
            </div>
        </div>
    );
};

export default Payment;