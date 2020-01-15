import { CART_TYPE } from './cart.types';

export const toggleCart = ()=>({
    type:CART_TYPE.TOGGLE_CART
})
export const addItems = (item)=>({
    type:CART_TYPE.ADD_ITEMS,
    payload:item
})
export const cartRemoveItems = item =>({
    type:CART_TYPE.CART_REMOVE_ITEMS,
    payload:item
})
export const cartQuantityRemove = item =>({
    type:CART_TYPE.CART_QUANTITY_REMOVE,
    payload:item
})