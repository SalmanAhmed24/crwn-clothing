import { CART_TYPE } from './cart.types';

export const toggleCart = ()=>({
    type:CART_TYPE.TOGGLE_CART
})
export const addItems = (item)=>({
    type:CART_TYPE.ADD_ITEMS,
    payload:item
})