import {CART_TYPE} from './cart.types';
import {AddItemToCart} from './cart.utils';
const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
}
const cartToggleReducer = (state = INITIAL_STATE,action)=>{
    switch (action.type) {
        case CART_TYPE.TOGGLE_CART:
            return {
                ...state,
                hidden:!state.hidden
            }      
        case CART_TYPE.ADD_ITEMS:
            return{
                ...state,
                cartItems: AddItemToCart(state.cartItems,action.payload)
            }
        default:
            return state;
    }
}
export default cartToggleReducer;