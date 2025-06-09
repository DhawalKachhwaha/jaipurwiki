import { aboutData } from "../data/data.jsx";
import "../styles/header.css";

const Header = () => (
  <div className='header'>
    <div className="header-contents">
      <h1>{aboutData[0].title}</h1>
      <p>{aboutData[0].description}</p>
      <button
        className="explore-button"
        onClick={() => document.getElementById('getting-around')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Explore Jaipur
      </button>
    </div>
  </div>
);

export default Header;