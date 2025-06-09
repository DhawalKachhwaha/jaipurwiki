import Header from "../components/header.jsx";
import DataSections from "../components/DataSections";
import Footer from "../components/Footer";
import "../styles/home.css";

const Home = () => (
    <div className="home-container">
        <Header />
        <DataSections />
        <Footer />
    </div>
);

export default Home;