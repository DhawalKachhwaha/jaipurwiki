import { useContext, useState, useEffect, useRef } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import DarkModeToggle from './DarkModeToggle';
import '../styles/navbar.css';

function Navbar() {
  const { darkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={darkMode ? 'navbar dark-mode' : 'navbar'} ref={navRef}>
      <div className="navbar-container">
        <div className="logo">JAIPUR</div>
        <div className="nav-right">
          <button
            className="menu-button"
            onClick={toggleMenu}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#getting-around" onClick={closeMenu}>Getting In</a></li>
            <li><a href="#transportation" onClick={closeMenu}>Transportation</a></li>
            <li><a href="#places" onClick={closeMenu}>Places</a></li>
            <li><a href="#events" onClick={closeMenu}>Events</a></li>
            <li><a href="#emergency" onClick={closeMenu}>Emergency</a></li>
          </ul>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
