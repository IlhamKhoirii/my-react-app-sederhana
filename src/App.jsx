

import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';

import Header from './components/Header';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import About from './pages/About';
import NavigationButton from './components/button_nav';


function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/counter2">Counter2</Link></li>

        </ul>
      </nav>
      <NavigationButton></NavigationButton>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counter2" element={<Counter2 />} />
        <Route path="/about" element={<About />} />


      </Routes>
    </div>
  );
}

export default App;