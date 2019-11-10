import React from 'react';
import './MenuItem.scss';
import {withRouter} from 'react-router-dom'

const MenuItem =({title,imageUrl,size,linkUrl,history,match}) =>{
    return(
        <div className={`${size} small-menu`} onClick={()=>{
            history.push(`${match.url}${linkUrl}`)
        }}>
            <div className="background" style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className="info-wrap">
                <h3>{title}</h3>
                <p>SHOP NOW</p>
            </div>
        </div>
    );
}
export default withRouter(MenuItem);