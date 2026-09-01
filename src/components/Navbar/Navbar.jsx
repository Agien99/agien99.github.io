import { useState } from 'react';
import './Navbar.css';

const navLinks = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Education',
    href: '#education',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* BRAND */}

        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Go to home"
        >
          <span className="navbar-logo-symbol">
            {'<'}
          </span>

          <span className="navbar-logo-name">
            EURGIEN
          </span>

          <span className="navbar-logo-symbol">
            {'/>'}
          </span>
        </a>


        {/* NAVIGATION */}

        <div
          className={`navbar-links ${
            menuOpen
              ? 'navbar-links-open'
              : ''
          }`}
        >

          {navLinks.map((link, index) => (
            <a
              href={link.href}
              onClick={closeMenu}
              key={link.href}
            >
              <span className="navbar-link-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span>
                {link.label}
              </span>
            </a>
          ))}

        </div>


        {/* MOBILE BUTTON */}

        <button
          type="button"
          className={`navbar-menu-button ${
            menuOpen
              ? 'navbar-menu-button-open'
              : ''
          }`}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
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