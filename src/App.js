import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepageComponent'
import ShopPage from './pages/shoppage/shoppageComponent';
import './App.css'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;