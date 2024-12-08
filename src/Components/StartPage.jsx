import ParticlesComponent from './Particles';

export default function StartPage() {
  return (
    <>
      <ParticlesComponent id="particles" />
      <div className="start-page">
        <nav>
          <div className="page-name">
            <h3>Abdul</h3>
          </div>
          <div className="nav-buttons">
            <ul>
              <li>
                <a href="#">About Me</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
        <section>
          <h1>Hi, Im Abdul</h1>
          <p>Aspiring web developer</p>
        </section>
      </div>
    </>
  );
}
