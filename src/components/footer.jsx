import "../css/navBar.css";

const Footer = () => {
  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="navbar">
      <ul className="navbar-links">
        <li>
          <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
            About
          </a>
        </li>
        <li>
          <a>Skills</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
