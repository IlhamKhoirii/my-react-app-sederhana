

import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';

import Header from './components/Header';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counter2" element={<Counter2 />} />

      </Routes>
    </div>
  );
}

export default App;