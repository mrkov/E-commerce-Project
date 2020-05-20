import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route } from 'react-router-dom';
import HatsPage from './pages/hatspage/HatsPage';
import ShopPage from './pages/ShopPage/ShopPage';

function App() {
  return (
    <div>
      
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={HatsPage} />
      <Route exact path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
