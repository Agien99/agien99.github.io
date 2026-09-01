import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          EURGIEN ANAK ANTHONY
        </a>

        {/* DESKTOP / MOBILE LINKS */}
        <div
          className={`navbar-links ${
            menuOpen ? 'navbar-links-open' : ''
          }`}
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`navbar-menu-button ${
            menuOpen ? 'navbar-menu-button-open' : ''
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;