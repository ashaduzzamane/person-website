import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import Contact from './pages/Contact';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <About />
    <Experiences />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
