import React from 'react';
import './ShopPage.scss';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class ShopPage extends React.Component{
    constructor(){
        super();
        this.state = {
            collection : SHOP_DATA
        }
    }
    render(){
        const {collection} = this.state;
        const Collection = collection.map(({id,...otherCollectionProps})=>{
            return <CollectionPreview 
            key={id} 
            {...otherCollectionProps}/>
        })
        return(
            <div className="container">
                    {Collection}
            </div>
        );
    }
}
export default ShopPage;