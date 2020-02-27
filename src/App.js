import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CollectionPreview from './components/collection-preview/collection-preview.component';
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ='/' component={HomePage}/>
        <Route  path ='/shop' component={ShopPage}/>
      </Switch>
    
     
    </div>
  );
}

export default App;
