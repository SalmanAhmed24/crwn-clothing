import React from "react";
import './Directory.scss';
import MenuItem from '../MenuItem/MenuIten';

class Directory extends React.Component{
    constructor(){
        super();

        this.state =[
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ];
    }
    render(){
        const SingleMenuItem = this.state.map(item=>{
            return <MenuItem key={item.id} title={item.title} imageUrl={item.imageUrl} size={item.size}/>
        })
        return(
            <div className="small-wraper">
                {SingleMenuItem}
            </div>
        );

    }
}
export default Directory;