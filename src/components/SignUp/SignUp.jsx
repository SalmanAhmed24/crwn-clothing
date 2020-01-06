import React from 'react';
import { auth,createUser } from '../../firebase/firebase.utils';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import './SignUp.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const { displayName,email,password,confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert("The passwords does not match")
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            createUser(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }
        catch(error){
            console.log(error.message);
        }
    }
    handleChange = event =>{
        event.preventDefault();
        const {name,value} = event.target;
        this.setState({
            [name]:value,
        })
        console.log(this.state);
    }
    render(){
        const { displayName,email,password,confirmPassword } = this.state;
        return(
            <div className="sign-up-wraper">
                <h3>Don't have an account?</h3>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="text"
                    name="displayName"
                    value={displayName}
                    label="Name"
                    onChange={this.handleChange}
                    required
                    />
                    <FormInput 
                    type="email"
                    name="email"
                    value={email}
                    label="Email"
                    onChange={this.handleChange}
                    required
                    />
                    <FormInput 
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required
                    />
                    <FormInput 
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="Confirm Password"
                    required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}
export default SignUp