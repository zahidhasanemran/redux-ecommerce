import * as acitonTypes from '../actions/index';

const counterState = {
    count: 3
}


const counterReducer = (state = counterState, action) => {
    switch (action.type) {
        case acitonTypes.Increment:
            return{
                ...state,
                count: state.count + 1
            }

        case acitonTypes.Decrement:
            return{
                ...state,
                count: state.count - 1
            }

        case acitonTypes.Reset:
            return{
                ...state,
                count: 0
            }
            
    
        default:
            return state;
    }
}

export default counterReducer;