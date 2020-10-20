import * as actionTypes from '../actions/actionConst'



const productState = {
    products: [],
    bestFiltered: [],
    featuredFiltered: [],
    filteredProduct: [],
    homeFilterd: [],
    shopFilter: [],
    shopProduct: [],
    newProducts: [],
    loading: true,
    error: false,
    category: [],
    detailsProd: [],
    count: 0,
    cart:[],
    iniCount: 1
}


const productReducer = (state = productState, action) => {
    switch (action.type) {

        // working homepage shoppage
        case actionTypes.SAVE_PRODUCT:
            return{
                ...state,
                ...state.products,
                ...state.bestFiltered,
                ...state.featuredFiltered,
                ...state.filteredProduct,
                ...state.cart,
                products: action.products,
                loading: false
            }
        
        // working homepage shoppage 
        case actionTypes.FAILED_PRODUCTS:
            return{
                ...state,
                error: action.error,
                loading: false
            }

        // working homepage
        case actionTypes.BEST_PRODUCT_SET:
            return{
                ...state,
                ...state.products,
                ...state.bestFiltered,
                bestFiltered: action.bestFiltered.filter(pro => pro.best)
            }
        
        // working homepage 
        case actionTypes.FEATURED_PRODUCT_FILTER:
            return{
                ...state,
                ...state.products,
                ...state.featuredFiltered,
                featuredFiltered: action.feturedFilter.filter(pro => pro.featured)
            }
            
        // working  hompage 
        case actionTypes.NEW_PRODUCT_SET:
            return{
                ...state,
                ...state.products,
                ...state.newProducts,
                newProducts: action.newProducts.filter(pro => pro.newS)
            }

        // working shoppage homepage
        case actionTypes.SAVE_PRODUCT_CATEGORY:
            let cate = ['all', ...new Set(action.categories.map(pro => pro.category))];
            
            return{
                ...state,
                ...state.category,
                category: cate
            }
    

        // working shoppage homepage 
        case actionTypes.SET_FILTER_PRODUCT:
            return{
                ...state,
                ...state.products,
                ...state.filteredProduct,
                ...state.homeFilterd,
                ...state.shopProduct,
                ...state.shopFilter,
                filteredProduct: action.products,
                homeFilterd: action.products,
                shopProduct: action.products,
                shopFilter: action.products
            }
            
        
        // working homepage 
        case actionTypes.BEST_PRODUCT_CAT_FILTER:
            return{
                ...state,
                ...state.products,
                ...state.bestFiltered,
                ...state.homeFilterd,
                bestFiltered: action.filterBy === 'all' ? state.homeFilterd.filter(pro => pro.best) : action.products.filter(pro => pro.best && pro.category === action.filterBy) 
            }
            
        // working shoppage 
        case actionTypes.SHOP_PRODUCT_FILTER:
            return{
                ...state,
                ...state.products,
                ...state.shopProduct,
                ...state.filteredProduct,
                shopFilter: action.filterBy === 'all' ? state.shopProduct : action.products.filter(pro => pro.category === action.filterBy)
            }
            
        // working details product page 
        case actionTypes.GET_DETAILS_PRODUCT:
            // let dtP = state.products.length > 0 ? state.products : action.products
            return{
                ...state,
                ...state.products,
                ...state.detailsProd,
                detailsProd: action.products.filter(x => x.id == action.id)
            }
    
        case actionTypes.ADDED_TO_CART:
            return{
                ...state,
            }
    
        // case actionTypes.PRODUCT_COUNT_LOAD:
        //     return{
        //         ...state,
        //         ...state.count,
        //         count: state.count
        //     }
            
    
        case actionTypes.ADD_TO_CART:
            /*

            -> See how rokomari works 
            -> take previous cart 
            -> take requested product 
            -> take qty of requested product 
            -> check if the product is already in cart 
                -> increase the qty with qty variable 
            -> else pushed the requested product to the cart 
            */


            let tempCart = state.cart;
 
            let cartProduct = state.products.find(x => x.id == action.id);

            

            let alreadyPro = tempCart.some(x => x.id === action.id);
            

            if(alreadyPro){
                tempCart = tempCart
                // let cartProduct2 = state.products.find(x => x.id == action.id);
                // // let qty = cartProduct2.qty;
                // tempCart.map(x => {
                //     let samId = x.id == action.id;
                //     if(samId){
                //         x.qty = state.iniCount > 1 ? state.iniCount + x.qty : x.qty + 1; //qty > 1 ? qty : x.qty + 1 //!== qty ? qty : x.qty + 1;
                //     }
                // })
            }else{
                tempCart.push(cartProduct); 
            }
            

            return{
                ...state,
                ...state.cart,
                cart: tempCart
            }
            
        // working product details page 
        case actionTypes.PRODUCT_COUNT_INCREMENT:
            let tempIncProduct = [];
            let inX = [...state.products].map(pro => {
                if(pro.id != action.id){
                    tempIncProduct.push(pro);
                }else{
                    pro.qty = pro.qty + 1;
                    tempIncProduct.push(pro);
                }
            })
            console.log(tempIncProduct);
            return{
                ...state,
                ...state.products,
                ...state.productNumberUpdate,
                ...state.iniCount,
                iniCount: state.iniCount + 1,
                products: tempIncProduct
            }
        // working product details page 
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
                ...state.productNumberUpdate,
                products: tempDecProduct

            }
            
    
        default:
            return state;
    }
}

export default productReducer;