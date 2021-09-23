import React from 'react';
import '../../src/App.css';

const Card = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <div className='card' key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button>read more</button>
        </div>
      ))}
    </>
  );
};

export default Card;
