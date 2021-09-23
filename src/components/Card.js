import React from 'react';
import '../../src/App.css';
import Button from './Button';
import { Link } from 'react-router-dom';

const Card = ({ users, userId }) => {
  const handleClick = (id) => {
    userId(id);
  };
  return (
    <>
      {users.map((user) => (
        <div className='card' key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <Link to='/user'>
            <Button onClick={() => handleClick(user.id)} />
          </Link>
        </div>
      ))}
    </>
  );
};

export default Card;
