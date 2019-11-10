import React from 'react';
import './Header.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';

const Header =()=>{
    return(
        <div className="container">
            <div className="header-wraper">
                <Link className="logo" to="/">
                    <Logo/>
                </Link>
                <div className="links-wrap">
                    <Link className="links" to="/shop">
                        Shop
                    </Link>
                    <Link className="links" to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Header;