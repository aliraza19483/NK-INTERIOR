import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";


function Footer() {

 return(<footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
            <h2 className="footer-logo">
                <span className="logo-main">Elite</span> Interior
            </h2>
          <p>Designing timeless spaces with elegance and innovation.</p>
          <br />
          <h3>Follow Us</h3>
            <div className="social-icons">
                <a href="/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
            <h3>Visit Our Studio</h3>
            <p>📍Address, Address</p>
            <p>📞+91 000 000 0000</p>
            <p>✉️ Example@gmail.com</p>
            <br />
            
        </div>
        </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Azhar Elite Interior. All Rights Reserved.</p>
      </div>
    </footer>)
    
}
export default Footer;