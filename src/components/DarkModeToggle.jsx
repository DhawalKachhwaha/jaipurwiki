import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/darkModeToggle.css';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <button
      className="dark-mode-button"
      onClick={toggleDarkMode}
    >
      {darkMode ? '☼' : '☾'}
    </button>
  );
};

export default DarkModeToggle;