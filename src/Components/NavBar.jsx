const navLinks = ['About Me', 'Projects', 'Contact Me'];

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

export default function NavBar() {
  return (
    <div className="nav-buttons">
      <ul>
        <CreateLinks />
      </ul>
    </div>
  );
}
