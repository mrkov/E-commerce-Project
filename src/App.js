import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Header from './components/header/Header';
import ShopPage from './pages/shop-page/ShopPage';
import HomePage from './pages/homepage/HomePage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage';
import CheckoutPage from './pages/checkout-page/CheckoutPage';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends Component {
  // nije vise potreban konstruktor sa stanjem, jer je pomereno u redux
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;
  
  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // this.setState({
          //   currentUser: {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }else {
        //this means user is null - same as: currentUser: null
        // vise nema this.setState({currentUser: userAuth}), zbog reduxa
        setCurrentUser(userAuth);
      }
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
      <Header />
      
      <Switch>
        <Route exact  path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/shop/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signIn' 
          render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        
        
      </Switch>

    </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)

