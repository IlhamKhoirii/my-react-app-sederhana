import React from 'react';
import Header from './components/Header';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Header title="Aplikasi React Saya" />
      <main>
        <h2>Selamat datang di aplikasi React</h2>
        <p>Ini adalah contoh halaman sederhana menggunakan React.</p>
        <Counter />
      </main>
    </div>
  );
}

export default App;