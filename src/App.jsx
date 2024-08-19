import React from 'react';
import Home from './pages/Home';
import backgroundImage from './assets/wp.jpg';
import './styles/App.css';

function App() {
  return (
    <div className="app-container" style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', 
      width: '100vw' 
    }}>
      <Home />
      <div className="bottom-text">
        Made with love on EndeavourOS by <a href="https://github.com/halsschmerzen">halsschmerzen</a>
      </div>
    </div>
  );
}

export default App;