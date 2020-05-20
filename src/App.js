import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch } from 'react-router-dom';
import HatsPage from './pages/hatspage/HatsPage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />

      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={HatsPage} />
      <Route exact path='/shop' component={ShopPage} />
      </Switch>
      
    </div>
  );
}

export default App;
