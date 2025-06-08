import '../styles/footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Jaipur</h3>
          <p>The Pink City of India</p>
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
          <p>Email: info@visitjaipur.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Jaipur Tourism</p>
      </div>
    </footer>
  );
}

export default Footer;
