import React from 'react';
import './Header.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

const Header =({currentUser,hidden})=>{
    // console.log(currentUser);
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
                    {
                        currentUser ?
                        <div className="links" onClick={()=>{auth.signOut()}}>Signout</div>
                        :
                        <Link className="links" to="/signin">
                        Signin
                        </Link>
                    }
                    <CartIcon />
                </div>
            </div>
            {
                (hidden)? null : <CartDropdown />
           
            }

        </div>
    );
}
const mapStateToProps = ({user:{currentUser},cart:{hidden}}) =>({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header);