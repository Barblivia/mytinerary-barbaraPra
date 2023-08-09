import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-950 to-cyan-600 p-2 text-white">
      <div className="flex justify-between items-center mb-2">
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/cities" className="hover:text-gray-300">
              Cities
            </a>
          </li>
          {/* Add other links */}
        </ul>
        <ul className="flex space-x-4">
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
      </div>
      <p className="text-center">04-TM-MERN - Developed by BP</p>
    </footer>
  );
};

export default Footer;