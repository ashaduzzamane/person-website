import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import Contact from './components/Contact/Contact';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <About />
    <Experiences />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);