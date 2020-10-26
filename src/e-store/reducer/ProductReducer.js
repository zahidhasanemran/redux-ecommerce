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
    iniCount: 1,
    totalPrice: 0,
    delivery: 30,
    relatedProduct: [],
    relatedProFilter: [],
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
                ...state.detailsProd,
                ...state.relatedProduct,
                ...state.relatedProFilter,
                relatedProduct: action.products,
                relatedProFilter: action.products,
                detailsProd: action.products.filter(x => x.id == action.id)
            }
            
        // working details product page 
        case actionTypes.RELATED_PRODUCT:
            const tempRelPro = action.relatedProduct.filter(x => x.category == action.category);
            return{
                ...state,
                ...state.products,
                ...state.relatedProduct,
                ...state.relatedProFilter,
                relatedProFilter: tempRelPro
            }


        // working details product page 
        case actionTypes.DELETE_FROM_CART:
            let cleanCart = [];
            action.cart.map(cc => {
                if(cc.id === action.id ){
                    cc.qty = 1;
                    cc.price = cc.price
                    cc.total = cc.price
                }
                cleanCart.push(cc);
            })
            let delteCart = cleanCart.filter(x => x.id !== action.id);
            let delteCartCount = delteCart.map(x => x.qty).reduce((total, current) => total + current);
            let DelcartTotalPrice = delteCart.map(cc => cc.total).reduce((total, current) => total + current);

            return{
                ...state,
                ...state.cart,
                ...state.totalPrice,
                ...state.count,
                ...state.products,
                cart: delteCart,
                totalPrice: DelcartTotalPrice,
                products: state.products,
                count: delteCartCount
            }
    
       
    
        
            
        // working 
        case actionTypes.ADD_TO_CART:
            let tempCart = state.cart;
            let cartProduct = state.products.find(x => x.id == action.id);
            let alreadyPro = tempCart.some(x => x.id === action.id);

            if(alreadyPro){
                tempCart = tempCart
            }else{
                tempCart.push(cartProduct); 
            }

            let x = action.cart.map(x => x.qty).reduce((total = 0, current) => {
                return total + current;
            });

            let cartTotalPrice = action.cart.map(cc => cc.total).reduce((total, current) => total + current);
            // console.log(state.totalPrice);
            
            // console.log(x);

            return{
                ...state,
                ...state.cart,
                ...state.count,
                ...state.totalPrice,
                cart: tempCart,
                count: x,
                totalPrice: cartTotalPrice
            }
        
        
        
        // working product details page 
        case actionTypes.PRODUCT_COUNT_INCREMENT:
            let tempInCount = 0;
            let tempInCart = [];
            // let tempInPrice = 0;
            action.cart.map(tc => {
                if(tc.id === action.id){
                    tc.qty = tc.qty + 1;
                    tc.total = tc.price * tc.qty
                }
                tempInCount = action.count + 1;
                tempInCart.push(tc);
            });
            let cartInTotalPrice = action.cart.map(cc => cc.total).reduce((total, current) => total + current);
            console.log(tempInCart);
            console.log(state.products);
            return {
                ...state,
                ...state.cart,
                ...state.count,
                ...state.totalPrice,
                cart: tempInCart,
                count: tempInCount,
                totalPrice: cartInTotalPrice
            }


        // working product details page 
        case actionTypes.PRODUCT_COUNT_DECREMENT:

            let tempDeCount = 0;
            let tempDeCart = [];
            action.cart.map(tc => {
                if(tc.id === action.id){
                    tc.qty = tc.qty - 1;
                    tc.total = tc.price * tc.qty
                }
                tempDeCount = action.count - 1;
                tempDeCart.push(tc);
            });

            let cartDefTotalPrice = action.cart.map(cc => cc.total).reduce((total, current) => total + current);
            
            return {
                ...state,
                ...state.cart,
                ...state.count,
                ...state.totalPrice,
                cart: tempDeCart,
                count: tempDeCount,
                totalPrice: cartDefTotalPrice
            }
            
    
        default:
            return state;
    }
}

export default productReducer;