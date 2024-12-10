import AboutMe from './Components/AboutMe';
import ParticlesComponent from './Components/Particles';
import Projects from './Components/Projects';
import StartPage from './Components/StartPage';

function App() {
  return (
    <>
      <ParticlesComponent id="particles" />
      <div className="whole-page">
        <StartPage />
        <AboutMe />
        <Projects />
      </div>
    </>
  );
}

export default App;
