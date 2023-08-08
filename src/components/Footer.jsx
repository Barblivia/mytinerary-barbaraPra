import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 p-4 text-white text-center">
      <ul className="flex justify-center space-x-4 mb-4">
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </li>
      </ul>
      <p>04-TM-MERN - Developed by BP</p>
    </footer>
  );
};

export default Footer;
