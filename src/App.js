import { Route, Switch } from 'react-router-dom';
import Header from './components/header/headerComponent'
import HomePage from './pages/homepage/homepageComponent'
import ShopPage from './pages/shoppage/shoppageComponent';
import ContactPage from './pages/contact/contactComponent'
import signInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-upComponent';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/signin' component={signInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;