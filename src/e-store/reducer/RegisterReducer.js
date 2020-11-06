import * as acitonTypes from '../actions/actionConst';


const RegisterData = {
    loading: false,
    error: '',
    regInfo: {
        id: '',
        email: '',
        token: '',

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
                regInfo: {
                    id: action.data.localId,
                    email: action.data.email,
                    token: action.data.idToken
                },
                isRegistered: true
            }
            
            
    
        case acitonTypes.REGISTER_FAILED:
            return{
                loading: false,
                error: action.error,
                isRegistered: false
            }
            
    
        default:
            return state;
    }
}

export default RegisterReducer;