import { useState } from "react";
import "../css/navBar.css";
import Switch from "./Switch";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close menu when a link is clicked
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">p1trickDev</div>

      {/* Hamburger menu button */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
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
          <a href="#skills" onClick={(e) => handleLinkClick(e, "skills")}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleLinkClick(e, "projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar-switch">
        <Switch />
      </div>
    </nav>
  );
};

export default Navbar;
