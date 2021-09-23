import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import User from './components/User';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [UserId, setUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    const data = async () => {
      const res = await axios('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
    };
    data();
  }, []);

  const showUser = (id) => {
    setUserId(id);

    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const data = async () => {
      const res = await axios(url);
      setUser(res.data);
      console.log(res.data);
    };
    data();
  };

  return (
    <div className='App'>
      <Router>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/'>
            <Home users={users} showUser={showUser} />
          </Route>
          <Route path='/user'>
            <User user={user} UserId={UserId} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
