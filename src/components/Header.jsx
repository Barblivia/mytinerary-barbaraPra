//"/public/logo/logo-color.png"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-sky-950 to-cyan-600 flex flex-wrap justify-center sm:flex-nowrap sm:justify-between items-center px-4 py-3">
      {/* Logo and App name */}
      <Link to="/" className="logo">
        <img src="/logo/logo-color.png" alt="Logo" className="h-8" />
      </Link>
      <nav className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li className="nav-item">
      {/* Menu options */}
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cities" className="nav-link text-white">
              Cities
            </Link>
          </li>
        </ul>
        <button className="flex items-center bg-sky-900 rounded-md border-cyan-500 p-1">
          {/*<span className="text-white"></span>*/}
          <img src="/ico/user-regular.ico" alt="Avatar" className="w-8 h-6 rounded-full" />
        </button>
      </nav>
    </header>
  );
};

export default Header;





