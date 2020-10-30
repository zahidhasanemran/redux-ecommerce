import Axios from 'axios';
import * as actions from './actionConst';
import Cookie from 'js-cookie'




export const LoginSuccess = (data) => {
    return {
        type: actions.USER_LOGIN_SUCCESS,
        data
    }
}

export const GetLogOut = () => {
    Cookie.remove('userInfo')
    return {
        type:actions.GET_LOG_OUT,

    }
}


export const checkExpiration = (expireTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(GetLogOut());
            
        }, expireTime);
    }
}


export const LoginFailed = (error) => {
    return {
        type: actions.USER_LOGIN_FAILED,
        error: error
    }
}


export const UserLogin = (email, password) => {
   
    return async dispatch => {

        await Axios.post('http://localhost:5000/api/users/login', {email, password})
        .then((res) => {
            console.log(res); // return id, name, email, isAdmin, token 
            dispatch(LoginSuccess(res.data))  
            dispatch(checkExpiration(20000))  // 86400000 
            // console.log("login success");
            Cookie.set('userInfo', JSON.stringify(res.data))
        }).catch((error) => {
            // console.log(error.response);
            dispatch(LoginFailed(error.message)) // error.response.data.message || 
        })
 
       
    }
}