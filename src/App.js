import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import { Route,Switch } from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage';
import SigninSigupPage from './pages/SignIn-Signup-Page/SignIn-Signup-Page';
import Header from './components/Header/Header';
import './App.css';
import {auth ,createUser} from './firebase/firebase.utils';
class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }
  
  unsubscribeAuth = null;
  componentDidMount(){
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUser(userAuth);
        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          },()=>{
            console.log(this.state)
          })
        })
      }
      else{
        this.setState({currentUser:userAuth})
      }
    })
      
    
  }

  componentWillUnmount(){
    this.unsubscribeAuth()
  }
  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/> 
          <Route exact path='/signin' component={SigninSigupPage}/>  
        </Switch>
      </div>
    );
  }
}

export default App;
