import * as acitonTypes from '../actions/index';

const footerState = {
    link: ''
}


const footerReducer = (state = footerState, action) => {
    switch (action.type) {
        case acitonTypes.FooterLoads:
            return{
                state
            }
            
    
        default:
            return state;
    }
}

export default footerReducer;