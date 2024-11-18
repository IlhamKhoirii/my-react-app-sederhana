

import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';

import Header from './components/Header';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;