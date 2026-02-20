import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";


function Footer() {

  return (<footer className="footer">
    <div className="footer-container">

      <div className="footer-section">
        <h2 className="footer-logo">
          <span className="logo-main">NK</span> CONTRACTOR
        </h2>
        <p>Designing timeless spaces with elegance and innovation.</p>
        <br />
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/____azhar_elite_interior" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#design-idea">Design Idea</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Visit Our Studio</h3>
        <p>📍Policeline, Madhapur, Hyderabad, Telangana 500081</p>
        <p>📞+91 8953507727</p>
        <p>✉️ [EMAIL_ADDRESS]</p>
        <br />

      </div>
    </div>
    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} NK CONTRACTOR. All Rights Reserved.</p>
    </div>
  </footer>)

}
export default Footer;