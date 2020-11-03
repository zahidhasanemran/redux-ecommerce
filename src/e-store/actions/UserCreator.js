import Axios from 'axios';
import * as actions from './actionConst';





export const LoginSuccess = (token, userId) => {
    // console.log(data);
    return {
        type: actions.USER_LOGIN_SUCCESS,
        token: token,
        userId: userId
    }
}


export const LoginFailed = (error) => {
    return {
        type: actions.USER_LOGIN_FAILED,
        error: error
    }
}


export const LoginStart = () => {
    return {
        type: actions.USER_LOGIN_REQ
    }
}


export const LogOut = () => {
    localStorage.removeItem('userToken')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')
    return {
        type: actions.LOG_OUT
    }
}


export const CheckToken = (exTime) => {

    return dispatch => {
        setTimeout(() => {
            dispatch(LogOut())
        }, exTime * 1000)
    }
}






export const LoginAuth = (email, password) => {
    
        return async dispatch => {

            dispatch(LoginStart());

            const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBqQjGHJA9e3uat9i_1Wt_FIurziVfbdbg';

            const authData = {
                email: email,
                password: password,
                returnSecureToken:  true
            }

            await Axios.post(url, authData)
            .then((res) => {

                const expiredDate = new Date(new Date().getTime() + (res.data.expiresIn * 1000) );

                dispatch(LoginSuccess(res.data.idToken, res.data.localId))
                localStorage.setItem('userToken', res.data.idToken)
                localStorage.setItem('expirationDate', expiredDate)
                localStorage.setItem('userId', res.data.localId)
                dispatch(CheckToken(res.data.expiresIn))
            }).catch((error) => {

                dispatch(LoginFailed(error)) // error.response.data.message || 
            })
           
        }
    }


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('userToken');
        if(!token){
            dispatch(LogOut());
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()){
                dispatch(LogOut());
            }else{
                const userId = localStorage.getItem('userId');
                dispatch(LoginSuccess(token, userId))
                dispatch(CheckToken((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}




// export const UserLogin = (email, password) => {
   
//     return async dispatch => {

//         // try {
//         //     const {data} = await Axios.post('https://redux-backend.herokuapp.com/api/users/login', {email, password});
//         //     console.log(data);
//         //     dispatch(LoginSuccess(data))
//         //     localStorage.setItem('userToken', JSON.stringify(data))
//         // } catch (error) {
//         //     console.log(error);
//         //     dispatch(LoginFailed(error))
//         // }

//         await Axios.post('https://redux-backend.herokuapp.com/api/users/login', {email, password})
//         .then((res) => {
//             // console.log(res);
//             dispatch(LoginSuccess(res.data))
//             localStorage.setItem('userToken', JSON.stringify(res.data))
//         }).catch((error) => {
//             // console.log(error.response);
//             dispatch(LoginFailed(error.message)) // error.response.data.message || 
//         })
 
       
//     }
// }