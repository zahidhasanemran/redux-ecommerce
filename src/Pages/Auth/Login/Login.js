import React from 'react';
import style from './Login.module.css';
import Button from '../../../component/ui/button/Button/Button'
import authImg from '../../../assets/img/auth.svg';

const Login = () => {



    return (
        <div className={style.Login}>
            <div className={style.img_section}>
                <img src={authImg} alt=""/>
            </div>
            <form>
                <div className={style.single_form}>
                    <input type="email" placeholder="abc@example.com" />
                </div>
                <div className={style.single_form}>
                    <input type="password" placeholder="ABxyzC@124$!" />
                </div>

                <div className={`${style.single_form} text-center`}>
                    <Button title="Login" /> 
                </div>
            </form>
        </div>
    );
};

export default Login;