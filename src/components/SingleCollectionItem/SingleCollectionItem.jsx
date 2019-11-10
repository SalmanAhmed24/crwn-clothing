import React from 'react';
import './SingleCollectionItem.scss';

const SingleCollectionItem = ({name,imageUrl,price}) =>{
    return(
        <div className="collection-wrap">
            <div className="background-image-div" style={{backgroundImage:`url(${imageUrl})`}}>
                <div className="button-wrap">
                    <button>Add To Cart</button>
                </div>
            </div>
            <div className="collection-info">
                <p>{name}</p>
                <p>${price}</p>
            </div>
        </div>
    );
}
export default SingleCollectionItem;