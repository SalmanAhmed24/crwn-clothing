import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import { Route,Switch } from 'react-router-dom';

const Hats = ()=>{
  return(
    <div>
      <p>HATS PAGE</p>
    </div>
  );
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={Hats}/>  
      </Switch>
    </div>
  );
}

export default App;
