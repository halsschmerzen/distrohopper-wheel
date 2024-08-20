import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Window, WindowHeader, WindowContent, styleReset, MenuList, MenuListItem, Checkbox } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import WheelComponent from '../components/Wheel';
import Confetti from 'react-confetti';
import descriptions from '../data/descriptions';
import '../styles/Home.css';
import Tux from '../assets/Tux.png';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
  html, body, #root {
    height: 100%;
    margin: 0;
    overflow: hidden; /* Prevent overflow */
  }
  #root {
    display: flex;
    flex-direction: column;
  }
`;

const Home = () => {
  const [result, setResult] = useState(null);
  const [showResultWindow, setShowResultWindow] = useState(false);
  const [showHelpMenu, setShowHelpMenu] = useState(false);
  const [easyMode, setEasyMode] = useState(false);
  const [superEasyMode, setSuperEasyMode] = useState(false);

  const handleCloseResultWindow = () => {
    setShowResultWindow(false);
    setResult(null);
  };

  const handleHelpClick = () => {
    setShowHelpMenu(!showHelpMenu);
  };

  const handleMenuItemClick = (url) => {
    window.open(url, '_blank');
    setShowHelpMenu(false);
  };

  const handleEasyModeChange = () => {
    setEasyMode(!easyMode);
    if (!easyMode) {
      setSuperEasyMode(false);
    }
  };

  const handleSuperEasyModeChange = () => {
    setSuperEasyMode(!superEasyMode);
    if (!superEasyMode) {
      setEasyMode(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <AppBar className="app-bar">
          <Toolbar className="toolbar">
            <div className="toolbar-left">
              <Button variant="menu" size="sm">
                Start
              </Button>
              <Checkbox
                label="Easy Mode"
                checked={easyMode}
                onChange={handleEasyModeChange}
                style={{ marginLeft: '10px' }}
              />
              <Checkbox
                label="Super Easy Mode"
                checked={superEasyMode}
                onChange={handleSuperEasyModeChange}
                style={{ marginLeft: '10px' }}
              />
            </div>
            <div className="source-text">
              <a href="https://github.com/halsschmerzen/distrohopper-wheel"> ★ Leave a star on GitHub! I would really appreciate it ^-^ ★ </a>
            </div>
            <div className="toolbar-right">
              <Button variant="menu" size="sm">
                File
              </Button>
              <Button variant="menu" size="sm">
                Edit
              </Button>
              <Button variant="menu" size="sm">
                View
              </Button>
              <Button variant="menu" size="sm" onClick={handleHelpClick}>
                Help
              </Button>
              {showHelpMenu && (
                <MenuList style={{ position: 'absolute', right: '10px', top: '40px', zIndex: 1000 }}>
                  <MenuListItem onClick={() => handleMenuItemClick('https://github.com/halsschmerzen/distrohopper-wheel/issues')}>
                    Report a bug
                  </MenuListItem>
                  <MenuListItem onClick={() => handleMenuItemClick('https://github.com/halsschmerzen')}>
                    Check out my GitHub =)!
                  </MenuListItem>
                </MenuList>
              )}
            </div>
          </Toolbar>
        </AppBar>
        <Window className="window">
          <WindowHeader className="window-header">
            <span>The amazing DistroHopper Wheel of Fortune! May the force be with you.</span>
          </WindowHeader>
          <WindowContent className="window-content">
            <p className="window-content-p">Welcome to the DistroHopper Wheel of Fortune!
                <br />
                Now let fate decide which Linux Distro you use next!
                <br/>
                (you will hop again in 2 weeks anyway...)
            </p>
            <WheelComponent 
              setResult={(result) => { 
                setResult(result); 
                setShowResultWindow(true); 
              }} 
              easyMode={easyMode}
              superEasyMode={superEasyMode}
            />
          </WindowContent>
          {showResultWindow && (
            <div className="modal">
              <Window className="result-window">
                <WindowHeader>
                  <span>Your wonderful, amazing, perfect result!</span>
                  <Button onClick={handleCloseResultWindow} style={{ float: 'right' }}>X</Button>
                </WindowHeader>
                <WindowContent className="result-window-content">
                  <img src={Tux} alt="Tux" className="result-window-img" />
                  <div>
                    <p className="result-window-p">{`You won: ${result}`}</p>
                    <p className="result-window-p">{descriptions[result]}</p>
                    <br/>
                    <p className="result-window-p-info">Here could be a little pixelart of each Distro, but I haven't found a nice collection of Linux Distro pixelarts! =(! So for now enjoy the little tux.</p>
                  </div>
                </WindowContent>
              </Window>
              <Confetti className="confetti" />
            </div>
          )}
        </Window>
      </ThemeProvider>
    </div>
  );
};

export default Home;