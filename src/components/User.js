import React from 'react';

const User = ({ user }) => {
  const style = {
    height: '300px',
    width: '250px',
    marginTop: '100px',
    marginLeft: '400px',
    padding: '20px 20px',
    borderRadius: '10px',
    boxShadow: '2px 3px 3px #ccc',
    border: '1px solid #fff',
  };

  return (
    <div style={style}>
      <ul>
        <li>Name: {user.name}</li>
        <li>Username: {user.username}</li>
        <li>Phone:{user.phone}</li>
        <li>email:{user.email}</li>
        <li>Website:{user.website}</li>
        <li>Company: {user.company.name}</li>
        <li>
          Address:{' '}
          <ul>
            <li>{user.address.street}</li>
            <li>{user.address.suite}</li>
            <li>{user.address.city}</li>
            <li>{user.address.zipcode}</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default User;
