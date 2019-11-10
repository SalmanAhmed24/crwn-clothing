import React from 'react';
import './CollectionPreview.scss';
import SingleCollectionItem from '../SingleCollectionItem/SingleCollectionItem';

const CollectionPreview = ({title,items})=>{
    const SingleCollection = items.filter((items,idx)=>{
        return idx < 4
    }).map(item=>{
        return(
            <SingleCollectionItem key={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price} />
        );
    })
    return(
        <div className="pt-3 pb-3">
            <h3 className="title">{title}</h3>
            <div className="single-collection-wrap">
            {SingleCollection}
            </div>
        </div>
    );
}
export default CollectionPreview;