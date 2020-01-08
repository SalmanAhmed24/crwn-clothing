import React from 'react';
import './cartItem.scss';

const CartItem = ({item})=>{
    const {imageUrl,name,price,quantity} = item;
    return(
        <div className="small-cart-wrap">
            <img src={imageUrl} alt="item" className="small-img"/>
            <div className="item-info">
                <span className="title">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
        </div>
    );
}
export default CartItem;