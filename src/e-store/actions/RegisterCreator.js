import Axios from 'axios';
import * as actions from './actionConst';
import Cookie from 'js-cookie'




export const RegisterSuccess = (data) => {
    return {
        type: actions.REGISTER_SUCCESS,
        data
    }
}


export const RegisterFailed = (error) => {
    return {
        type: actions.REGISTER_FAILED,
        error: error
    }
}


export const RegisterReq = (error) => {
    return {
        type: actions.REGISTER_REQ,
    }
}



export const RegisterAuth = (name, email, password) => {
   
    return async dispatch => {
        dispatch(RegisterReq());
        const authData = {
            email: email,
            password: password,
            returnSecureToken:  true
        }
        await Axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBqQjGHJA9e3uat9i_1Wt_FIurziVfbdbg', authData)
        .then((res) => {
            console.log(res);
            dispatch(RegisterSuccess(res.data))
            Cookie.set('userInfo', JSON.stringify(res.data))
        }).catch((error) => {
            console.log(error);
            dispatch(RegisterFailed(error))
        })
       
    }
}



// export const RegisterReq = (name, email, password) => {
   
//     return async dispatch => {

//         await Axios.post('https://redux-backend.herokuapp.com/api/users/register', {name, email, password})
//         .then((res) => {
//             // console.log(res);
//             dispatch(RegisterSuccess(res.data))
//             Cookie.set('userInfo', JSON.stringify(res.data))
//         }).catch((error) => {
//             // console.log(error.response);
//             dispatch(RegisterFailed(error))
//         })
       
//     }
// }