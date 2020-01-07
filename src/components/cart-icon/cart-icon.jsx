import React from 'react';
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg';
import "./cart-icon.scss";

const CartIcon = ()=>{
    return(
        <div className="main-cartIcon-wrap">
            <ShoppingBag className="cartIcon" />
            <span className="count-no">0</span>
        </div>
    );
}
export default CartIcon;