import * as acitonTypes from '../actions/actionConst';


const initialUser = {
    loading: false,
    error: null,
    userId: '',
    token: '',
    isAuth: false
}



const UserReducer = (state = initialUser, action) => {
    switch (action.type) {

        case acitonTypes.USER_LOGIN_REQ:
            return{
                ...state,
                loading: true,
                isAuth: false,
                error: null
            }
            
    
        case acitonTypes.USER_LOGIN_SUCCESS:
            return{
                ...state,
                loading: false,
                token: action.token,
                userId: action.userId,
                error: null,
                isAuth: true
            }
            
            
    
        case acitonTypes.SAVE_SHIPPING:
            return{
                ...state,
                shipping: action.shipping
            }
            
            
            
    
        case acitonTypes.SAVE_PAYMENT:
            return{
                ...state,
                paymentMethod: action.paymentMethod
            }
            
            
    
        case acitonTypes.USER_LOGIN_FAILED:
            return{
                ...state,
                loading: false,
                error: action.error,
                isAuth: false,
                token: '',
                userId: ''
            }
            
            
    
        case acitonTypes.LOG_OUT:
            return{
                ...state,
                token: '',
                userId: '',
                isAuth: false
            }
            
    
        default:
            return state;
    }
}

export default UserReducer;