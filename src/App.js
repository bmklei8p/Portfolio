import React from 'react';
import './App.css';
import PortfolioNav from './features/Navbar/PortfolioNav';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <PortfolioNav />
      </BrowserRouter>
  );
}

export default App;
