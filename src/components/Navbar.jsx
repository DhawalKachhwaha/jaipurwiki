import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import DarkModeToggle from './DarkModeToggle';
import '../styles/navbar.css';

function Navbar() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <nav className={darkMode ? 'navbar dark-mode' : 'navbar'}>
      <div className="navbar-container">
        <div className="logo">JAIPUR</div>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#getting-around">Getting In</a></li>
            <li><a href="#transportation">Transportation</a></li>
            <li><a href="#places">Places</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#emergency">Emergency</a></li>
          </ul>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;