import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import { Route,Switch,Redirect } from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage';
import SigninSigupPage from './pages/SignIn-Signup-Page/SignIn-Signup-Page';
import Header from './components/Header/Header';
import './App.css';
import {auth ,createUser} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from "./redux/user/user.action";
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
          <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to="/" />) :(<SigninSigupPage />) }/>  
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state =>({
  currentUser:state.user.currentUser
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser:user=> dispatch(setCurrentUser(user))
}) 
export default connect(mapStateToProps,mapDispatchToProps)(App);
