import React from 'react';
import './SignIn-Signup-Page.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SigninSigupPage = ()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <SignIn />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <SignUp />
                </div>
            </div>
        </div>
    );
}
export default SigninSigupPage;