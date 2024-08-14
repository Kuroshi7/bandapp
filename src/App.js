import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './pages/Home/Home';
import Banda from './pages/Banda/Banda';
import Membros from './pages/Membros/Membros';
import Galeria from './pages/Galeria/Galeria';
import Landing from './pages/Landing/Landing';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<>
          
          <Home />
        </>} />
        <Route path="/banda" element={<>
          
          <Banda />
        </>} />
        <Route path="/membros" element={<>
          
          <Membros />
        </>} />
        <Route path="/galeria" element={<>
          
          <Galeria />
        </>} />
      </Routes>
    </Router>
  );
}

export default App;



