import Axios from 'axios';
import * as actions from './actionConst';
import Cookie from 'js-cookie'




export const LoginSuccess = (data) => {
    return {
        type: actions.USER_LOGIN_SUCCESS,
        data
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

        // try {
        //     const {data} = await Axios.post('https://redux-backend.herokuapp.com/api/users/login', {email, password});
        //     console.log(data);
        //     dispatch(LoginSuccess(data))
        //     Cookie.set('userInfo', JSON.stringify(data))
        // } catch (error) {
        //     console.log(error);
        //     dispatch(LoginFailed(error))
        // }

        await Axios.post('http://localhost:500/users/login', {email, password})
        .then((res) => {
            // console.log(res);
            dispatch(LoginSuccess(res.data))
            Cookie.set('userInfo', JSON.stringify(res.data))
        }).catch((error) => {
            // console.log(error.response);
            dispatch(LoginFailed(error.message)) // error.response.data.message || 
        })
 
       
    }
}