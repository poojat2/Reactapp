import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './pages/about';
import Home from './pages/home';
import Menu from './pages/menu';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Home/>
        <About/>
        <Menu/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
