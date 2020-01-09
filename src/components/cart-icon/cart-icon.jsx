import React from 'react';
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg';
import "./cart-icon.scss";
import {connect} from 'react-redux'
import {toggleCart} from '../../redux/cart/cart.action';
import {selectCartItemCount} from '../../redux/cart/cart.selector';

const CartIcon = ({toggleCart,itemCount})=>{
    return(
        <div className="main-cartIcon-wrap" onClick={toggleCart}>
            <ShoppingBag className="cartIcon" />
    <span className="count-no">{itemCount}</span>
        </div>
    );
}
const mapStateToProps=(state)=>({
        itemCount:selectCartItemCount(state)
})
const mapDispatchToProps = dispatch =>({
    toggleCart:()=> dispatch(toggleCart())
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);