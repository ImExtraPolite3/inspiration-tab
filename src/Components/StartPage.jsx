const navLinks = ['About Me', 'Projects', 'Contact Me'];

function LinksProp({ linkName }) {
  return (
    <li className={linkName}>
      <a href="#">{linkName}</a>
    </li>
  );
}

function CreateLinks() {
  return navLinks.map((eachLink, index) => {
    return <LinksProp key={index} linkName={eachLink} />;
  });
}

export default function StartPage() {
  return (
    <>
      <div className="start-page">
        <nav>
          <div className="page-name">
            <h3>Abdul</h3>
          </div>
          <div className="nav-buttons">
            <ul>
              <CreateLinks />
            </ul>
          </div>
        </nav>
        <section className="intro">
          <h1>Hi, Im Abdul</h1>
          <p>Aspiring web developer</p>
        </section>
      </div>
    </>
  );
}
