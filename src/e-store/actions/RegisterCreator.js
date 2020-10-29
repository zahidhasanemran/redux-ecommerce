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



export const RegisterReq = (name, email, password) => {
   
    return async dispatch => {

        await Axios.post('https://redux-backend.herokuapp.com/api/users/register', {name, email, password})
        .then((res) => {
            // console.log(res);
            dispatch(RegisterSuccess(res.data))
            Cookie.set('userInfo', JSON.stringify(res.data))
        }).catch((error) => {
            // console.log(error.response);
            dispatch(RegisterFailed(error))
        })
       
    }
}