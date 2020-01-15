import React from 'react';
import './checkOut.scss';

const CheckOutItems =({cartItems:{name,imageUrl,quantity,price}})=>{
    return(
        <div className="checkout-wraper">
            <div className="items-wrap image-wrap">
                <img alt="item" src={imageUrl} className="prod-image" />
            </div>
            <div className="items-wrap">
                <span className="prod-name">{name}</span>
            </div>
            <div className="items-wrap">
                <span className="prod-name">{quantity}</span>
            </div>
            <div className="items-wrap">
                <span className="prod-name">{price}</span>
            </div>
            <div className="items-wrap">
                <button className="prod-btn">&#10005;</button>
            </div>
        </div>
    )
}
export default CheckOutItems;