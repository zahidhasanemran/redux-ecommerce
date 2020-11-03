import React, { useState, useEffect } from 'react';
import style from './Login.module.css';
import Button from '../../../component/ui/button/Button/Button'
import authImg from '../../../assets/img/auth.svg';
import { LoginAuth } from '../../../e-store/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../component/Loading/Loading';





const Login = (props) => {

    const dispatch = useDispatch();
    const UserInfo = useSelector(state => state.UserReducer)
    const {error, isAuth, loading} = UserInfo;
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    // console.log(UserInfo);
    useEffect(() => {
        if (isAuth) {
          props.history.push(redirect);
        }
        return () => {
        
        };
      }, [isAuth]);


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(LoginAuth(useremail, userpassword))
        console.log("SUBMIT FORM ");
    }

    const [useremail, setEmail] = useState('')
    const [userpassword, setPassword] = useState('')

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div className={style.Login}>
            <div className={style.img_section}>
                <img src={authImg} alt=""/>
            </div>
            <form onSubmit={submitHandler}>
                <div className={style.single_form}>
                    {error && <p className="text-cener"> {error.response.data.error.message}</p> }
                </div>


                <div className={style.single_form}>
                    <input type="email" placeholder="abc@example.com" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={style.single_form}>
                    <input type="password" placeholder="ABxyzC@124$!" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className={`${style.single_form} text-center`}>
                    <button className="defBtn" type="submit">Login</button>
                </div>

                <p className="pt-4"><small>New in Amazona ?</small></p>

                <div className={`${style.single_form} text-center`}>
                    <Button title="Register" link={redirect === '/' ? 'register' : 'register?redirect='+redirect} /> 
                </div>
            </form>
        </div>
    );
};

export default Login;