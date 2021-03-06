import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/headerComponent'
import HomePage from './pages/homepage/homepageComponent'
import ShopPage from './pages/shoppage/shoppageComponent';
import ContactPage from './pages/contact/contactComponent'
import signInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-upComponent';
import { auth, createUserProfileDocumnent } from '../src/firebase/firebase.utils'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };

  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocumnent(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }

      this.setState({ currentUser: userAuth })

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
          <Route path='/shop' component={ShopPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/signin' component={signInAndSignUpPage} />
        </Switch>
      </div>
    );
  }

}

export default App;