import { useEffect, useState } from "react";
import Header from "../components/header.jsx";
import Navbar from "../components/Navbar";
import DataSections from "../components/DataSections";
import Footer from "../components/Footer";
import "../styles/home.css";

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }, []);


    return (
        <div className={`home-container ${isLoaded ? 'loaded' : ''}`}>
            <Navbar />
            <Header />
            <DataSections />
            <Footer />
        </div>
    )
}

export default Home;