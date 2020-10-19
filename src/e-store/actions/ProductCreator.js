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

export const BestProCatFilter = (pro) => {
    return{
        type: actions.BEST_PRODUCT_CAT_FILTER,
        filterBy: pro
    }
}

export const ShopProFilter = (cat) => {
    return{
        type: actions.SHOP_PRODUCT_FILTER,
        filterBy: cat
    }
}

export const BestProductFilter = (fproducts) => {
    return{
        type: actions.BEST_PRODUCT_FILTER,
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
        type: actions.NEW_PRODUCT_FILTER,
        newProducts: newProducts
    }
}

export const SaveProductCategory = (products) => {
    return {
        type: actions.SAVE_PRODUCT_CATEGORY,
        categories: products
    }
}

export const FilterProduct = (products) => {
    return {
        type: actions.FILTER_PRODUCT,
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
    // alert("porduct laod start")
    return dispatch => {
        Axios.get('http://localhost:5000/api/products')
        .then(res => {
            dispatch(SaveProducts(res.data))
            dispatch(BestProductFilter(res.data))
            dispatch(FeaturedProductFilter(res.data))
            dispatch(NewProductFilter(res.data))
            dispatch(SaveProductCategory(res.data))
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

export const ShopProductRequested = () => {
    
    return dispatch => {
        Axios.get('http://localhost:5000/api/products')
        .then(res => {
            dispatch(SaveProducts(res.data))
            dispatch(SaveProductCategory(res.data))
            dispatch(FilterProduct(res.data))
        })
        .catch(error => {
            dispatch(FailedProducts(error))
        })
    }
}

export const SingleProductRequested = (id) => {
    
    return dispatch => {
        Axios.get('http://localhost:5000/api/products/')
        .then(res => {
            dispatch(getDetailsProduct(res.data, id))
            dispatch(SaveProducts(res.data))
        })
        .catch(error => {
            dispatch(FailedProducts(error))
        })
    }
}



export const productCountIncrement = (id) => {
    return {
        type: actions.PRODUCT_COUNT_INCREMENT,
        id: id,
        // products: products
    }
}

export const productCountDecrement = ( id) => {
    return {
        type: actions.PRODUCT_COUNT_DECREMENT,
        id: id,
        // products: products
    }
}

export const addToCart = ( id) => {
    return {
        type: actions.ADD_TO_CART,
        id: id,
        // products: products
    }
}
