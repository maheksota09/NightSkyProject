import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/footer-css';

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.facebook.com">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
