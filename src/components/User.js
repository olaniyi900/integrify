import React from 'react';
import { useParams } from 'react-router-dom';

const User = ({ user, userId }) => {
  const { id } = useParams(userId);
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default User;
