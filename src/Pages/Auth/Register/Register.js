import React, { useEffect, useState } from 'react';
import style from '../Login/Login.module.css'
import Button from '../../../component/ui/button/Button/Button'
import authImg from '../../../assets/img/auth.svg';
import {RegisterReq} from '../../../e-store/actions/index'
import { useDispatch, useSelector } from 'react-redux';


const Register = (props) => {

    const dispatch = useDispatch();
    const RegisterUser = useSelector(state => state.RegisterReducer)
    const {loading, regInfo: {name, email, isAdmin}, error, isRegistered} = RegisterUser;

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(RegisterReq(Username, Useremail, Userpassword))
        console.log("SUBMIT FORM ");
    }
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/' ;

    useEffect(()=>{
        if(email){
            props.history.push(redirect);
        }
    }, [email])

    


    const [Username, setuserName] = useState('')
    const [Useremail, setuserEmail] = useState('')
    const [Userpassword, setuserPassword] = useState('')
    const [UserRepassword, setuserRePassword] = useState('')



    return (
        <div className={style.Login}>
            <div className={style.img_section}>
                <img src={authImg} alt=""/>
            </div>
            <form onSubmit={submitHandler}>

                <div className={style.single_form}>
                    <input type="text" placeholder="john doe" id="name" onChange={(e) => setuserName(e.target.value)} />
                </div>

                <div className={style.single_form}>
                    <input type="email" placeholder="abc@example.com" id="email" onChange={(e) => setuserEmail(e.target.value)} />
                </div>
                
                <div className={style.single_form}>
                    <input type="password" placeholder="ABxyzC@124$!" id="password" onChange={(e) => setuserPassword(e.target.value)} />
                </div>

                <div className={style.single_form}>
                    <input type="password" placeholder="ABxyzC@124$!" id="repassword" onChange={(e) => setuserRePassword(e.target.value)} />
                </div>

                <div className={`${style.single_form} text-center`}>
                    <button className="defBtn" type="submit">Register</button>
                </div>

                <p className="pt-4"><small>Already Have an account?</small></p>

                <div className={`${style.single_form} text-center`}>
                    <Button title="Login" link={redirect === '/' ? 'login' : 'login/redirect='+redirect} />
                </div>


            </form>
        </div>
    );
};

export default Register;