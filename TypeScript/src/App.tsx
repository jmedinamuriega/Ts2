
import React from 'react';
import './App.css';
import UserInfo from './components/UserInfo';
import Card from './components/Card';

const App: React.FC = () => {
  const user = {
    name: "John Cena",
    age: 99,
    email: "john.cena@seavecina.com"
  };

  return (
    <div>
      <UserInfo name={user.name} age={user.age} email={user.email} />
      <Card>
        <h2>Hello</h2>
        <p>THis is a card</p>
      </Card>
      <Card>
        <UserInfo name={user.name} age={user.age} email={user.email} />
      </Card>
      <Card>
        <ul>
          <li>Item number1</li>
          <li>ItemNUmber2</li>
          <li>Item number3</li>
        </ul>
      </Card>
    </div>
  );
};

export default App;
