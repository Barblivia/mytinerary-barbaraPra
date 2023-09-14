import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../store/actions/userAction'; 


const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const [showMenu, setShowMenu] = useState(false);

  const handleSignOut = () => {
    dispatch(logoutUser());
  };

  return (
    <header className="bg-gradient-to-r from-sky-950 to-cyan-600 flex flex-wrap justify-center sm:flex-nowrap sm:justify-between items-center px-4 py-3">
      {/* Logo and App name */}
      <Link to="/" className="logo">
        <img src="/logo/logo-color.png" alt="Logo" className="h-8" />
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
          {user ? (
            <li className="nav-item">
              <button
                onClick={handleSignOut}
                className="nav-link text-white cursor-pointer"
              >
                Sign Out
              </button>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/signin" className="nav-link text-white">
                Sign In
              </Link>
            </li>
          )}
        </ul>
        <button
          className="flex items-center bg-sky-900 rounded-md border-cyan-500 p-1"
          onClick={() => setShowMenu(!showMenu)}
        >
          <img
            src={user ? user.image : '/ico/user.ico'}
            alt="User"
            className="w-8 h-6 rounded-full"
          />
        </button>
      </nav>
      </header>
  );
};

export default Header;
