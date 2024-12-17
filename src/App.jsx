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

  const handleShowContact = () => {
    setShowContact('');
    setHideContent('none');
  };

  return (
    <>
      <ParticlesComponent id="particles" />
      <div className="whole-page" style={{ display: hideContent }}>
        <NavBar onClick={handleShowContact} />
        <StartPage />
        <AboutMe />
        <Projects />
      </div>
      <ContactMe hideContact={showContact} />
    </>
  );
}

export default App;
