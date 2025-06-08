import { useEffect, useState } from "react";
import { aboutData } from "../data/data.jsx";
import "../styles/header.css";

const Header = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    const scrollToContent = () => {
        const contentSection = document.getElementById('getting-around');
        if (contentSection) {
            contentSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='header'>
            <div className={`header-contents ${visible ? 'visible' : ''}`}>
                <h1>{aboutData[0].title}</h1>
                <p>{aboutData[0].description}</p>
                <button className="explore-button" onClick={scrollToContent}>
                    Explore Jaipur
                </button>
            </div>
        </div>
    )
}

export default Header