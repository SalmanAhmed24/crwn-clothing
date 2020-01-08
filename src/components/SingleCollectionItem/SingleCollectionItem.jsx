import React from 'react';
import './SingleCollectionItem.scss';
import CustomButton from '../CustomButton/CustomButton';
import {connect} from 'react-redux';
import {addItems} from '../../redux/cart/cart.action';

const SingleCollectionItem = ({item,addItems}) =>{
    const {name,imageUrl,price} = item;
    return(
        <div className="collection-wrap">
            <div className="background-image-div" style={{backgroundImage:`url(${imageUrl})`}}>
                <div className="button-wrap">
                    <CustomButton onClick={()=>addItems(item)}>ADD TO CART</CustomButton>
                </div>
            </div>
            <div className="collection-info">
                <p>{name}</p>
                <p>${price}</p>
            </div>
        </div>
    );
}
const mapDispatchToProps = dispatch =>({
    addItems: (item) => dispatch(addItems(item))
})
export default connect(null,mapDispatchToProps)(SingleCollectionItem);