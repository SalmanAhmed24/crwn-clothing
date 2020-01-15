import React from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SigninSigupPage from './pages/SignIn-Signup-Page/SignIn-Signup-Page';
import CheckOut from './pages/CheckOutPage/checkout';

import Header from './components/Header/Header';

import './App.css';

import {auth ,createUser} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from "./redux/user/user.action";
import {currentUserSelector} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';

class App extends React.Component {

  unsubscribeAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUser(userAuth);
        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            })
      })
    }
      else{
        setCurrentUser(userAuth)
      }
    })
      
    
  }

  componentWillUnmount(){
    this.unsubscribeAuth()
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckOut}/> 
          <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to="/" />) :(<SigninSigupPage />) }/>  
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser:currentUserSelector
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser:user=> dispatch(setCurrentUser(user))
}) 
export default connect(mapStateToProps,mapDispatchToProps)(App);
