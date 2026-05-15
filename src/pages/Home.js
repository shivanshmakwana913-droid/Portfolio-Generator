import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="badge">✨ Build your digital presence</div>
          <h1>
            Your amazing portfolio, <br />
            <span className="gradient-text">built in minutes.</span>
          </h1>
          <p className="hero-subtitle">
            Selfolio is a powerful platform where you can create, design, update, and manage your developer portfolio with stunning aesthetic themes. No coding required—just plug in your details and go live.
          </p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => navigate('/Builder')}>Start Creating Now</button>
            <button className="secondary-btn" onClick={() => navigate('/Portfolio')}>View Example</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card glass">
            <div className="card-header">
              <div className="circle red"></div>
              <div className="circle yellow"></div>
              <div className="circle green"></div>
            </div>
            <div className="card-body">
              <div className="mock-skeleton title"></div>
              <div className="mock-skeleton line"></div>
              <div className="mock-skeleton line short"></div>
              <div className="mock-grid">
                <div className="mock-box highlight"></div>
                <div className="mock-box"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2>Why choose Selfolio?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Multiple Themes</h3>
            <p>From Minimal to Glassmorphism and Terminal styles, pick the perfectly aligned aura for your work.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Your data is stored efficiently and your portfolio renders blazing fast on any modern device.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Fully Responsive</h3>
            <p>Looks gorgeous on desktop monitors, tablets, and every mobile device automatically.</p>
          </div>
        </div>
      </div>

      <footer className="home-footer" style={{ textAlign: 'center', padding: '2.5rem', borderTop: '1px solid #e2e8f0', color: '#64748b', marginTop: 'auto' }}>
        <p style={{ margin: 0, fontWeight: '500' }}>&copy; {new Date().getFullYear()} Selfolio. Developed with ❤️ by Shivansh Makwana.</p>
      </footer>
    </div>
  );
}

export default Home;