import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../src/App.css';
import Card from './Card';

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const data = async () => {
      const res = await axios('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
    };
    data();
  }, []);
  return (
    <div className='home'>
      <Card users={users} />
    </div>
  );
};

export default Home;
