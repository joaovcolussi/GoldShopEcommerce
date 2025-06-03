import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Collection from './pages/Collection/Collection';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colecao" element={<Collection />} />
        <Route path="/produto/:id" element={<ProductDetail />} />
        <Route path="/aneis" element={<Collection />} />
        <Route path="/brincos" element={<Collection />} />
        <Route path="/colares" element={<Collection />} />
        <Route path="/pulseiras" element={<Collection />} />
      </Routes>
    </Router>
  );
};

export default App;