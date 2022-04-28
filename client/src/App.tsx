import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Landing from './pages/Landing';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={Landing()}/>
        <Route path='/home' element={Home()}/>
      </Routes>
    </div>
  );
}

export default App;
