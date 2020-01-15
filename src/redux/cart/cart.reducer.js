import {CART_TYPE} from './cart.types';
import {AddItemToCart,CartRemoveQuantity} from './cart.utils';
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
        case CART_TYPE.CART_REMOVE_ITEMS:
            return{
                ...state,
                cartItems:state.cartItems.filter(item=>item.id !== action.payload.id)
            }
        case CART_TYPE.CART_QUANTITY_REMOVE:
            return{
                ...state,
                cartItems:CartRemoveQuantity(state.cartItems,action.payload)
            }
        default:
            return state;
    }
}
export default cartToggleReducer;