import React, { useState, useEffect } from 'react';
import style from './Login.module.css';
import Button from '../../../component/ui/button/Button/Button'
import authImg from '../../../assets/img/auth.svg';
import { UserLogin } from '../../../e-store/actions';
import { useDispatch, useSelector } from 'react-redux';





const Login = (props) => {

    const dispatch = useDispatch();
    const UserInfo = useSelector(state => state.UserReducer)
    const {error, isAuth, loading, userInfo: {id, email, name, isAdmin}} = UserInfo;
    // console.log(name);

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    useEffect(() => {
        console.log(props.location);
        if (email) {
          props.history.push(redirect);
        }
        return () => {
          //
        };
      }, [email]);


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(UserLogin(useremail, userpassword))
        console.log("SUBMIT FORM ");
    }

    const [useremail, setEmail] = useState('')
    const [userpassword, setPassword] = useState('')

    // console.log(email, password);

    return (
        <div className={style.Login}>
            <div className={style.img_section}>
                <img src={authImg} alt=""/>
            </div>
            <form onSubmit={submitHandler}>
                <div className={style.single_form}>
                    {loading && <p className="text-cener">Loading ...</p> }
                    {error && <p className="text-cener"> {error}</p> }
                </div>


                <div className={style.single_form}>
                    <input type="email" placeholder="abc@example.com" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={style.single_form}>
                    <input type="password" placeholder="ABxyzC@124$!" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className={`${style.single_form} text-center`}>
                    <button type="submit">Login</button>
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