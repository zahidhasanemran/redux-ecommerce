import * as acitonTypes from '../actions/actionConst';


const initialUser = {
    loading: false,
    error: '',
    userInfo: {
        id: '',
        name: '',
        email: '',
        isAdmin: false
    },
    isAuth: false
}



const UserReducer = (state = initialUser, action) => {
    switch (action.type) {
        case acitonTypes.USER_LOGIN_REQ:
            return{
                loading: true,
                isAuth: false
            }
            
    
        case acitonTypes.USER_LOGIN_SUCCESS:
            return{
                loading: false,
                userInfo: action.data,
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
                loading: false,
                error: action.error,
                isAuth: false,
                userInfo: state.userInfo
            }
            
    
        default:
            return state;
    }
}

export default UserReducer;