import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
