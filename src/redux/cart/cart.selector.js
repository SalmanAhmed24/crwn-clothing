import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
    [selectCart],
    cart=>cart.cartItems
)

export const selectCartItemCount = createSelector(
    [selectCartItem],
    cartItems=>
        cartItems.reduce((accumatedQuantity,cartItem)=>
           accumatedQuantity + cartItem.quantity
        ,0)
    
)
export const cartHidden = createSelector(
    [selectCart],
    cart=> cart.hidden
)