import './App.css';
import Home from './components/Home';
import User from './components/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/user'>User</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/user/:id'>
            <User />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
