export const AddItemToCart = (cartItems,cartItemToAdd)=>{
const existingItem = cartItems.find(cartItem=>cartItem.id === cartItemToAdd.id)
console.log(existingItem)
if(existingItem){
    console.log('this is the existing item',existingItem)
    return cartItems.map(cartItem=>{
       return (cartItem.id === cartItemToAdd.id)
         ? {...cartItem, quantity:cartItem.quantity + 1}
         : cartItem
    })
}
else{
    console.log("in else loop",existingItem)
    return [...cartItems,{...cartItemToAdd,quantity:1}]
}
}

export const CartRemoveQuantity = (cartItems,cartQuantityToRemove)=>{
    const existingItem = cartItems.find(cartItem=>cartItem.id === cartQuantityToRemove.id);
    if(existingItem.quantity === 1){
        return cartItems.filter(cartItem=>cartItem.id !== cartQuantityToRemove.id)
    }
    return cartItems.map(cartItem=>{
        return(cartItem.id === cartQuantityToRemove.id)
        ?{...cartItem,quantity:cartItem.quantity - 1}
        : cartItem
    })
}