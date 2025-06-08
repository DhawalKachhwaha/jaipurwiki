import '../styles/footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Reference</h3>
          <p>r/jaipur</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#places">Places to Visit</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#emergency">Emergency</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: example@example.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} BY Dhawal Kachhwaha</p>
      </div>
    </footer>
  );
}

export default Footer;
