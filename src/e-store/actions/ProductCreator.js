import Axios from 'axios';
import * as actions from './actionConst';




export const SaveProducts  = (products) => {
    return {
        type: actions.SAVE_PRODUCT,
        products: products
    }
}

export const ProductCountLoad  = () => {
    return {
        type: actions.PRODUCT_COUNT_LOAD
    }
}

export const FailedProducts  = (error) => {
    return {
        type: actions.FAILED_PRODUCTS,
        error
    }
}

export const BestProCatFilter = (cat, products) => {
    return{
        type: actions.BEST_PRODUCT_CAT_FILTER,
        filterBy: cat,
        products: products
    }
}

export const ShopProFilter = (cat, products) => {
    return{
        type: actions.SHOP_PRODUCT_FILTER,
        filterBy: cat,
        products
    }
}


export const BestProductFilter = (fproducts) => {
    return{
        type: actions.BEST_PRODUCT_SET,
        bestFiltered: fproducts
    }
}

export const FeaturedProductFilter = (feturedProduct) => {
    return {
        type: actions.FEATURED_PRODUCT_FILTER,
        feturedFilter: feturedProduct
    }
}

export const NewProductFilter = (newProducts) => {
    return {
        type: actions.NEW_PRODUCT_SET,
        newProducts: newProducts
    }
}

export const SaveProductCategory = (products) => {
    return {
        type: actions.SAVE_PRODUCT_CATEGORY,
        categories: products
    }
}

export const SetFilterProduct = (products) => {
    return {
        type: actions.SET_FILTER_PRODUCT,
        products: products
    }
}

export const getDetailsProduct = (products, id) => {
    return {
        type: actions.GET_DETAILS_PRODUCT,
        products: products,
        id: id
    }
}




export const ProductRequested = () => {
    
    return dispatch => {
        Axios.get('http://localhost:5000/api/products')
        .then(res => {
            dispatch(SaveProducts(res.data))
            dispatch(SaveProductCategory(res.data));
        })
        .catch(error => {
            dispatch(FailedProducts(error))
        })
    }
}

export const allProducts = () => {
    
    return dispatch => {
        Axios.get('http://localhost:5000/api/products')
        .then(res => {
            dispatch(SaveProducts(res.data))
        })
        .catch(error => {
            dispatch(FailedProducts(error))
        })
    }
}

// export const ShopProductRequested = () => {
    
//     return dispatch => {
//         Axios.get('http://localhost:5000/api/products')
//         .then(res => {
//             dispatch(SaveProducts(res.data))
//         })
//         .catch(error => {
//             dispatch(FailedProducts(error))
//         })
//     }
// }

// export const SingleProductRequested = (id) => {
    
//     return dispatch => {
//         Axios.get('http://localhost:5000/api/products/')
//         .then(res => {
//             dispatch(getDetailsProduct(res.data, id))
//             dispatch(SaveProducts(res.data))
//         })
//         .catch(error => {
//             dispatch(FailedProducts(error))
//         })
//     }
// }



export const DeleteFromCart = (id, cart, products) => {
    return {
        type: actions.DELETE_FROM_CART,
        id,
        cart,
        products
    }
}




export const RelatedProduct = (category, relatedProduct) => {
    // console.log(category, relatedProduct);
    return {
        type: actions.RELATED_PRODUCT,
        category,
        relatedProduct
    }
}


export const productCountIncrement = (id, cart, products, count) => {
    return {
        type: actions.PRODUCT_COUNT_INCREMENT,
        id: id,
        cart: cart, 
        products,
        count
    }
}

export const productCountDecrement = (id, cart, products, count) => {
    return {
        type: actions.PRODUCT_COUNT_DECREMENT,
        id: id,
        cart: cart,
        products,
        count
    }
}

export const addToCart = (id, cart) => {
    return {
        type: actions.ADD_TO_CART,
        id: id,
        cart
    }
}
