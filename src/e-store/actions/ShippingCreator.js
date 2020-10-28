import * as actions from './actionConst';

export const saveShipping = (address, city, country, pcode) => {
    return {
        type: actions.SAVE_SHIPPING,
        shipping: {
            address,
            city,
            country,
            pcode
        }
    }
}

export const savePayment = (paymentMethod) => {
    return {
        type: actions.SAVE_PAYMENT,
        paymentMethod
    }
}