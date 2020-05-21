import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop-page/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage';
import {auth} from './firebase/firebase.utils'
import CustomButton from './components/custom-button/CustomButton';


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user)
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route exact path='/signIn' component={SignInAndSignUpPage} />
      </Switch>

    </div>
    )
  }
}

