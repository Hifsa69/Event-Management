import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}

        <div className="footer-section">
          <h2>EventHub</h2>

          <p>
            Creating unforgettable events and memorable experiences.
            Stay connected with us for upcoming events and exciting updates.
          </p>
        </div>

        {/* Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li><Link to="/">Home</Link></li>

            <li><Link to="/events">Events</Link></li>

            <li><Link to="/gallery">Gallery</Link></li>

            <li><Link to="/about">About</Link></li>

            <li><Link to="/contact">Contact</Link></li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-section">

          <h3>Contact</h3>

          <p>📍 Rawalpindi, Pakistan</p>

          <p>📞 +92 321 9148232</p>

          <p>✉ info@eventhub.com</p>

        </div>

        {/* Social */}

        <div className="footer-section">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 EventHub. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;