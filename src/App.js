import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Builder from './pages/Builder';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="splash-screen">
        <div className="splash-content">
          <h1 className="splash-brand">Selfolio<span className="dot">.</span></h1>
          <div className="splash-loader">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="global-navbar no-print">
          <div className="nav-brand">
            <Link to="/">Selfolio<span className="dot">.</span></Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/Builder" className="nav-item">Builder</Link>
            <Link to="/Portfolio" className="nav-item cta-btn">Preview Portfolio</Link>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Builder" element={<Builder />} />
            <Route path="/Portfolio" element={<Portfolio />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;