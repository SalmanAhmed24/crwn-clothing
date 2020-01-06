import React from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import { auth,signInWithGoogle } from '../../firebase/firebase.utils'
import CustomButton from '../CustomButton/CustomButton';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'salman.ahmed@gmail.com',
            password:'reactive'
        }
        // this.signInWithGoogle = signInWithGoogle;
    }
    handleSubmit = async (event)=>{
        event.preventDefault();
        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:'',
                password:''
            })
        }
        catch(error){
            console.log(error.message)
        }
    }
    handleChange = (event)=>{
        const {value,name} = event.target;
        this.setState({[name]:value})
    }
    render(){
        return(
        <div>
            <h3>I already have an account</h3>
            <span>Sign in with your email and password</span>
            <form onSubmit = {this.handleSubmit}>
                <div className="form-wrap">
                        <FormInput 
                            type = "email" 
                            name = "email" 
                            required
                            label = "Email"  
                            value = {this.state.email}
                            handleChange = {this.handleChange}
                            />
                    
                        <FormInput 
                            type="password" 
                            name="password" 
                            required 
                            label = "Password"
                            value={this.state.password}
                            handleChange = {this.handleChange}
                            />
                    <div className="pass-wrap">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleBtn onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                    </div>
                </div>
            </form>
        </div>
        );
    }
}
export default SignIn