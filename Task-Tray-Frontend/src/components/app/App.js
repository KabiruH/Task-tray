import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../navbar';
import TaskList from '../taskList';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <TaskList />
    </BrowserRouter>
  );
}

export default App;
