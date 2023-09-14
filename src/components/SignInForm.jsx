import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions/userAction';
import GoogleSignIn from './GoogleSignIn.jsx'

const SignInForm = () => {
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();

  //const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginUser(formData));
      
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred during sign in.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 mb-20 p-6 bg-sky-200 bg-opacity-50 shadow-md rounded-md">
      <h2 className="text-2xl text-blue-50 font-semibold bg-gradient-to-r from-sky-950 to-cyan-600 mb-4">Sign In to explore amazing cities</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className='flex justify-center mb-2'>
                    <GoogleSignIn  /></div>
            <button
          type="submit"
          className="w-full bg-sky-900 text-white p-2 rounded-md hover:bg-cyan-600"
        >
          Sign In
        </button>
        <div className="flex items-center justify-between pb-6">
          <p className="text-sky-900 mb-0 m-2 gap-4">Want to join? Create an account!!!</p>
          <Link to="/signup" className="nav-link text-sky-900 m-2 text-xl hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;


