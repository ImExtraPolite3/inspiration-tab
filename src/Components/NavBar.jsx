const navLinks = ['About Me', 'Projects'];

const links = ['#about-me', '#projects'];

function LinksProp({ linkName, links }) {
  return (
    <li className={linkName}>
      <a href={links}>{linkName}</a>
    </li>
  );
}

function CreateLinks() {
  return navLinks.map((eachLink, index) => {
    return <LinksProp key={index} links={links[index]} linkName={eachLink} />;
  });
}

export default function NavBar({ onClick }) {
  return (
    <nav>
      <div className="page-name">
        <h3>Abdul</h3>
      </div>
      <div className="nav-buttons">
        <ul>
          <CreateLinks />
          <li>
            <button className="contact-me-button" onClick={onClick}>
              Contact Me
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
