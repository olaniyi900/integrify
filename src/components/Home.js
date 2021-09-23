import React from 'react';

import '../../src/App.css';
import Card from './Card';

const Home = ({ users, showUser }) => {
  const userId = (id) => {
    showUser(id);
  };
  return (
    <div className='home'>
      <Card users={users} userId={userId} />
    </div>
  );
};

export default Home;
