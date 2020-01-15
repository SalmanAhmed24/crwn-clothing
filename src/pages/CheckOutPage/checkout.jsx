import React from 'react';
import './checkout.scss';
import {connect} from 'react-redux';
import CheckOutItems from '../../components/checkout/checkOutItems';
import {createStructuredSelector} from 'reselect';
import {cartTotal,selectCartItem} from '../../redux/cart/cart.selector';

const CheckOut = ({cartTotal,cartItems})=>{
    return(
        <div className="container pt-5 mt-5">
            <div className="cart-header">
                <div className="cart-title">
                    <span>Product</span>
                </div>
                <div className="cart-title">
                    <span>Description</span>
                </div>
                <div className="cart-title">
                    <span>Quantity</span>
                </div>
                <div className="cart-title">
                    <span>Price</span>
                </div>
                <div className="cart-title">
                    <span>Remove</span>
                </div>
            </div>
            <div>
                {
                    cartItems.map(items=>{
                    return <CheckOutItems cartItems={items} key={items.id}/>
                    })
                }
            </div>
            <div className="total-wrap">
                <p>Total Price: ${cartTotal}</p>
            </div>

        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    cartTotal:cartTotal,
    cartItems:selectCartItem
})
export default connect(mapStateToProps)(CheckOut);