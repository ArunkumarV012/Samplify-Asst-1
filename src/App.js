import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import './App.css'; 

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []); 

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        {}
        <div className="sk-chase">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="App container">
      <header className="py-4 text-center">
      </header>
      <div className="row">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;