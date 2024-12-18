import { useState } from 'react';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import ParticlesComponent from './Components/Particles';
import Projects from './Components/Projects';
import StartPage from './Components/StartPage';
import NavBar from './Components/NavBar';

function App() {
  const [showContact, setShowContact] = useState('none');
  const [hideContent, setHideContent] = useState('');
  const [showMenu, setShowMenu] = useState('none');

  const handleShowMenu = () => {
    if (showMenu === 'none') {
      setShowMenu('block');
    } else {
      setShowMenu('none');
    }
  };

  const handleShowContact = () => {
    setShowContact('');
    setHideContent('none');
  };

  return (
    <>
      <ParticlesComponent id="particles" />
      <div className="whole-page" style={{ display: hideContent }}>
        <NavBar
          onClick={handleShowContact}
          showMenu={showMenu}
          clickMenu={handleShowMenu}
        />
        <StartPage />
        <AboutMe />
        <Projects />
      </div>
      <ContactMe
        hideContact={showContact}
        onClick={() => {
          setShowContact('none');
          setHideContent('');
        }}
      />
    </>
  );
}

export default App;
