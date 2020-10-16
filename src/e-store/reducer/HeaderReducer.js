import * as acitonTypes from '../actions/index';

const headerState = {
    link: ''
}


const headerReducer = (state = headerState, action) => {
    switch (action.type) {
        case acitonTypes.HeaderLoads:
            return{
                state
            }
            
    
        default:
            return state;
    }
}

export default headerReducer;