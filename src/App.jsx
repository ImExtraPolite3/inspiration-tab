import AboutMe from './Components/AboutMe';
import ParticlesComponent from './Components/Particles';
import StartPage from './Components/StartPage';
AboutMe;

function App() {
  return (
    <>
      <ParticlesComponent id="particles" />
      <div className="whole-page">
        <StartPage />
        <AboutMe />
      </div>
    </>
  );
}

export default App;
