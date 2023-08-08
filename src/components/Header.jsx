//"/public/logo/logo-color.png"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-200 to-teal-800 px-8 flex justify-between items-center">
      <Link to="/" className="logo">
        <img src="/logo/logo-color.png" alt="Logo" className="h-12" />
      </Link>
      <nav className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li className="nav-item">
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
        <button className="flex items-center space-x-2 btn btn-primary">
          <span className="text-white">Login</span>
          <img src="https://www.flaticon.com/free-icons/user" alt="Avatar" className="w-6 h-6 rounded-full" />
        </button>
      </nav>
    </header>
  );
};

export default Header;





