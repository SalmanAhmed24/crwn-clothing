import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import { Route,Switch } from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage';
import './App.css';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>  
      </Switch>
    </div>
  );
}

export default App;
