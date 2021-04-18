import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import CounterManagement from './components/Button/CounterManagement';

function App() {
  return (
    <>
      <h1>My App</h1>
      <CounterManagement ownerName = "Carolina" />
    </>
  );
}

export default App;
