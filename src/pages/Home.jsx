import React from 'react';
import './style.css';

export function Home() {
  return (
    <div id="home">
      <header
        className="header"
        style={{
          background:
            'linear-gradient(45deg,#8B123F, #9A1D41  , #9A1D68  , #881477  , #560D6C)',
        }}
      >
        <div className="container">
          <div className="header-content">
            <h4 className="header-subtitle">Hello, I am</h4>
            <h1 className="header-title">Dhanya Krishnan</h1>
            <h6 className="header-mono">Computer Science Engineer | Student</h6>
            
          </div>
        </div>
      </header>
    </div>
  );
}
