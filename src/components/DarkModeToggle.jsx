import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/darkModeToggle.css';

function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button 
      className="dark-mode-button"
      onClick={toggleDarkMode}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? '☼' : '☾'}
    </button>
  );
}

export default DarkModeToggle;
