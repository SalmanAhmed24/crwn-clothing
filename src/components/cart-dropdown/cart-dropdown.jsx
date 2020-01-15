import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import {connect} from 'react-redux';
import CartItem from '../cartItem/cartItem';
import {selectCartItem} from '../../redux/cart/cart.selector';
import {toggleCart} from '../../redux/cart/cart.action';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

const CartDropdown = ({cartItems,history,dispatch})=>{
    return(
        <div className="cart-dropdown-wrap">
            <div className="cart-items">
                {cartItems.length ? (cartItems.map(item=> (<CartItem key={item.id} item={item} />))
                    ):(
                    <span className="empty-cart">Your cart is empty</span>
                    )}
            </div>
            <CustomButton onClick={()=>{
                dispatch(toggleCart());
                history.push('/checkout');
                }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItem
})

export default withRouter(connect(mapStateToProps)(CartDropdown));