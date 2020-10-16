import * as actions from './actionConst'

export const Increment  = () => {
    return {
        type: actions.INCREMENT
    }
}

export const Decrement  = () => {
    return {
        type: actions.DECREMENT
    }
}

export const Reset  = () => {
    return {
        type: actions.RESET
    }
}