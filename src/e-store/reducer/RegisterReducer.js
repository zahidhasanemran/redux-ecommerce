import * as acitonTypes from '../actions/actionConst';


const RegisterData = {
    loading: false,
    error: '',
    regInfo: {
        id: '',
        name: '',
        email: '',
        isAdmin: false
    },
    isRegistered: false
}



const RegisterReducer = (state = RegisterData, action) => {
    switch (action.type) {
        case acitonTypes.REGISTER_REQ:
            return{
                loading: true,
                isRegistered: false
            }
            
    
        case acitonTypes.REGISTER_SUCCESS:
            return{
                loading: false,
                regInfo: action.data,
                isAuth: true
            }
            
            
    
        case acitonTypes.REGISTER_FAILED:
            return{
                loading: false,
                error: action.error,
                isRegistered: false,
                regInfo: state.regInfo
            }
            
    
        default:
            return state;
    }
}

export default RegisterReducer;