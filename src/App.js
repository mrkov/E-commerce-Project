import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import ShopPage from './pages/shop-page/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

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
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      <Route
        exact
        path='/signIn' 
        render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
      </Switch>

    </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)

