import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import Home from './pages/Home';
import Sinister from './pages/Sinister';
import Aide from './pages/Aide';
import Assurances from './pages/Assurances';
import Contact from './pages/Contact';
import Careers from './pages/Careers';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sinistres" element={<Sinister />} />
        <Route path="/aide" element={<Aide />} />
        <Route path="/assurances" element={<Assurances />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
}

export default App;
