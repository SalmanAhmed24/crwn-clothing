import React from 'react';
import './MenuItem.scss';

const MenuItem =({title,imageUrl,size}) =>{
    return(
        <div className={`${size} small-menu`}>
            <div className="background" style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className="info-wrap">
                <h3>{title}</h3>
                <p>SHOP NOW</p>
            </div>
        </div>
    );
}
export default MenuItem;