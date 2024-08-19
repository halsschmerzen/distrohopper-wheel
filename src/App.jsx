import React from 'react';
import Home from './pages/Home';
import backgroundImage from './assets/wp.jpg';
import './styles/App.css';

function App() {
  return (
    <div className="app-container" style={{ 
      backgroundImage: `url(${backgroundImage})`
    }}>
      <Home />
      <div className="bottom-text">
        Made with love on EndeavourOS by <a href="https://github.com/halsschmerzen">halsschmerzen</a>
        <div className="source-text">
          <a href="https://github.com/halsschmerzen/distrohopper-wheel">Leave a star on GitHub! </a>
        </div>
      </div>
    </div>
  );
}

export default App;