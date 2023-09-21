import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { signInUser } from '../store/actions/userAction';
import  GoogleSignIn  from './GoogleSignIn.jsx';
import Swal from 'sweetalert2';

const SignInForm = () => {

  const store = useSelector(store => store.userReducer)
//  console.log(store)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  //const [error, setError] = useState('');

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
// console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await dispatch(signInUser({data: formData})); 
      
      if (response.payload.user) {
        Swal.fire({
        icon: 'success',
        title: 'Success!!!',
        text: 'You are now signed in!',
      });
    } else {
      Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Sign in failed. Please check your email and password.',
    });}
  }
    catch (error) {
      console.error(error)
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
            onChange={handleInput}
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
            onChange={handleInput}
            placeholder="Enter your password"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className='flex justify-center mb-2'>
            <GoogleSignIn  /></div>
          {/* SUBMIT SIGN IN */}
            <button
              className="w-full bg-sky-900 text-white p-2 rounded-md hover:bg-cyan-600"
              type="submit" onClick={handleSubmit}>Sign in 
            </button>
         {/* TO SIGN UP */}
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


