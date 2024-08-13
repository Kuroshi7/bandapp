import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './pages/Home';
import Banda from './pages/Banda';
import Membros from './pages/Membros';
import Galeria from './pages/Galeria';
import Landing from './pages/Landing';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/" element={<Navbar />}>
            <Route path="/home" element={<Home />} />
            <Route path="/banda" element={<Banda />} />
            <Route path="/membros" element={<Membros />} />
            <Route path="/galeria" element={<Galeria />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;



