import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
      </Router>
    </div>
  )
}

export default App
