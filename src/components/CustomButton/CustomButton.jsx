import React from 'react';
import './CustomButton.scss';

const CustomButton = ({children,isGoogleBtn,...otherprops}) =>{
    return(
        <button className={`${isGoogleBtn ? 'google-btn' : ''} cus-btn`} {...otherprops}>
        {children}
        </button>
    );    
}
export default CustomButton;