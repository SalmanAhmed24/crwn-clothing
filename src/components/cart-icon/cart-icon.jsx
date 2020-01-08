import React from 'react';
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg';
import "./cart-icon.scss";
import {connect} from 'react-redux'
import {toggleCart} from '../../redux/cart/cart.action'

const CartIcon = ({toggleCart})=>{
    return(
        <div className="main-cartIcon-wrap" onClick={toggleCart}>
            <ShoppingBag className="cartIcon" />
            <span className="count-no">0</span>
        </div>
    );
}
const mapDispatchToProps = dispatch =>({
    toggleCart:()=> dispatch(toggleCart())
})
export default connect(null,mapDispatchToProps)(CartIcon);