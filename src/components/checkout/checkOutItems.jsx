import React from 'react';
import './checkOut.scss';
import {connect} from 'react-redux';
import {cartRemoveItems,cartQuantityRemove,addItems} from '../../redux/cart/cart.action'


const CheckOutItems =({cartItems,cartItemsRemove,cartQuantityRemove,addItems})=>{
    const {name,imageUrl,quantity,price} = cartItems;
    return(
        <div className="checkout-wraper">
            <div className="items-wrap image-wrap">
                <img alt="item" src={imageUrl} className="prod-image" />
            </div>
            <div className="items-wrap">
                <span className="prod-name">{name}</span>
            </div>
            <div className="items-wrap">
                <div className="quan-wrap">
                    <span className="arrow" onClick={()=>cartQuantityRemove(cartItems)}>&#10094;</span>
                    <span className="prod-name">{quantity}</span>
                    <span className="arrow" onClick={()=>addItems(cartItems)}>&#10095;</span>
                </div>
            </div>
            <div className="items-wrap">
                <span className="prod-name">{price}</span>
            </div>
            <div className="items-wrap">
                <button className="prod-btn" onClick={()=>{cartItemsRemove(cartItems)}}>&#10005;</button>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    cartItemsRemove: item => dispatch(cartRemoveItems(item)),
    cartQuantityRemove:item=>dispatch(cartQuantityRemove(item)),
    addItems:item=>dispatch(addItems(item))
}) 
export default connect(null,mapDispatchToProps)(CheckOutItems);