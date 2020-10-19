import * as actionTypes from '../actions/actionConst'



const productState = {
    products: [],
    bestFiltered: [],
    featuredFiltered: [],
    filteredProduct: [],
    newProducts: [],
    loading: true,
    error: false,
    emran: false,
    category: [],
    detailsProd: [],
    count: 0,
    cart:[]
}


const productReducer = (state = productState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_PRODUCT:
            return{
                ...state,
                ...state.products,
                products: action.products,
                loading: false,
                emran:true
            }
            
        case actionTypes.FAILED_PRODUCTS:
            return{
                ...state,
                error: action.error,
                loading: false
            }
            
        case actionTypes.BEST_PRODUCT_FILTER:
            return{
                ...state,
                ...state.bestFiltered,
                bestFiltered: action.bestFiltered.filter(pro => pro.best)
            }
            
        case actionTypes.FEATURED_PRODUCT_FILTER:
            return{
                ...state,
                ...state.featuredFiltered,
                featuredFiltered: action.feturedFilter.filter(pro => pro.featured)
            }
            
            
        case actionTypes.NEW_PRODUCT_FILTER:
            return{
                ...state,
                ...state.newProducts,
                newProducts: action.newProducts.filter(pro => pro.newS)
            }
            
        case actionTypes.FILTER_PRODUCT:
            return{
                ...state,
                ...state.filteredProduct,
                filteredProduct: action.products
            }
            
    
        case actionTypes.SAVE_PRODUCT_CATEGORY:
            let cate = ['all', ...new Set(action.categories.map(pro => pro.category))];
            
            return{
                ...state,
                ...state.category,
                category: cate
            }
    
    
        case actionTypes.BEST_PRODUCT_CAT_FILTER:
            return{
                ...state,
                ...state.bestFiltered,
                bestFiltered: action.filterBy === 'all' ? state.products.filter(pro => pro.best) : state.products.filter(pro => pro.best && pro.category === action.filterBy)
            }
            
    
        case actionTypes.SHOP_PRODUCT_FILTER:
            return{
                ...state,
                ...state.products,
                ...state.filteredProduct,
                products: action.filterBy === 'all' ? state.filteredProduct : state.filteredProduct.filter(pro => pro.category === action.filterBy)
            }
            
    
        case actionTypes.GET_DETAILS_PRODUCT:
            // let dtP = state.products.length > 0 ? state.products : action.products
            return{
                ...state,
                ...state.products,
                ...state.detailsProd,
                detailsProd: action.products.filter(x => x.id == action.id)
            }
    
        case actionTypes.PRODUCT_COUNT_LOAD:
            return{
                ...state,
                ...state.count,
                count: state.count
            }
            
    
        case actionTypes.ADD_TO_CART:
            /*
            -> take previous cart 
            -> take requested product 
            -> take qty of requested product 
            -> check if the product is already in cart 
                -> increase the qty with qty variable 
            -> else pushed the requested product to the cart 
            */


            // take previous cart  // old cart 
            let tempCart = state.cart;
            // take requested product  // product object 
            let cartProduct = state.products.find(x => x.id == action.id);
            // take qty of requested product  // prodcut qty 
            let qty = cartProduct.qty;

            // check if the product is already in cart 
            let alreadyPro = tempCart.some(x => x.id === action.id);
            if(alreadyPro){
                tempCart.map(x => {
                    let samId = x.id == action.id;
                    if(samId){
                        x.qty = x.qty + 1
                    }
                })
            }else{
                tempCart.push(cartProduct); 
            }
            // requested product to the cart 
            
            // console.log(tempCart);
            return{
                ...state,
                ...state.cart,
                cart: tempCart
            }
            
    
        case actionTypes.PRODUCT_COUNT_INCREMENT:
            let tempIncProduct = [];
            let inX = [...state.products].map(pro => {
                if(pro.id != action.id){
                    tempIncProduct.push(pro);
                }else{
                    pro.qty++;
                    tempIncProduct.push(pro);
                }
            })
            console.log(tempIncProduct);
            return{
                ...state,
                ...state.products,
                products: tempIncProduct,
            }
            
        case actionTypes.PRODUCT_COUNT_DECREMENT:
            let tempDecProduct = [];
            let Dex = [...state.products].map(pro => {
                if(pro.id != action.id){
                    tempDecProduct.push(pro);
                }else{
                    pro.qty = pro.qty <= 0 ? pro.qty = 0 : pro.qty - 1
                    tempDecProduct.push(pro);
                }
            })
            console.log(tempDecProduct);
            return{
                ...state,
                ...state.products,
                products: tempDecProduct,

            }
            
    
        default:
            return state;
    }
}

export default productReducer;