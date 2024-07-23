
import React from 'react';
import { UserInfoProps } from '../types';

const UserInfo: React.FC<UserInfoProps> = ({ name, age, email }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserInfo;
