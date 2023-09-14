import './Footer.css'
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">© {new Date().getFullYear()} NineClouds. Todos los derechos reservados.</p>
        <p className="footer__text2">"All we need is tech to reach the clouds..."</p> 
      </div>
    </footer>
  );
};

export default Footer;