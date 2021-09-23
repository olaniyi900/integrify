import React from 'react';

const User = ({ user }) => {
  const style = {
    height: '300px',
    width: '250px',
    margin: '10px',
    padding: '20px 10px',
    'border-radius': '10px',
    'box-shadow': '2px 3px 3px #ccc',
    border: '1px solid #fff',
    display: 'flex',
    justifyContent: 'center',
    'align-items': 'center',
  };

  return (
    <div style={style}>
      <ul>
        <li>Name: {user.name}</li>
        <li>Username: {user.username}</li>
        <li>Phone:{user.phone}</li>
        <li>email:{user.email}</li>
        <li>Company: {user.company.name}</li>
        <li>Website:{user.website}</li>
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
