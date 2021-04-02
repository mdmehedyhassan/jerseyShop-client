import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
       
    <Router>
    <Header></Header>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/addJersey">
            <Admin />
          </Route>
          <Route path="/deals">
            <Deals />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
