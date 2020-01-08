import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import {connect} from 'react-redux';
import CartItem from '../cartItem/cartItem';

const CartDropdown = ({cartItems})=>{
    return(
        <div className="cart-dropdown-wrap">
            <div className="cart-items">
                {
                    cartItems.map(item=>{
                        return <CartItem key={item.id} item={item} />
                    })
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}
const mapStateToProps = ({cart:{cartItems}}) =>({
    cartItems 
})
export default connect(mapStateToProps)(CartDropdown);