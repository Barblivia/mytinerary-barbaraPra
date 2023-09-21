import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../store/actions/userAction';
import Swal from 'sweetalert2';

const SignUpForm = () => {
  
  //const authError = useSelector((state) => state.auth.error);
   //const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    image: '',
    password: '',
    country: '',
  });

  const countries = ['Argentina', 'Ireland', 'Canada', 'United States', 'Portugal', 'Cuba', 'France', 'Brazil'];
  
  const dispatch = useDispatch();
 
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      dispatch(signUpUser({
        data: formData
      })) 
      Swal.fire
({
        icon: 'success',
        title: 'Success!!!',
        text: 'User registered!',
        footer: '<a href="/signin">Now, please Sign In</a>'
    })
       } catch (error) {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'User registration failed.',
        });
      }
  }
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-sky-200 bg-opacity-50 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center text-sky-900 mb-4">Create an Account</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name
          </label>
          <input 
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInput}
            className="form-input mt-1 block w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInput}
            className="form-input mt-1 block w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block font-medium text-gray-700">
            Profile Photo URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleInput}
            className="form-input mt-1 block w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInput}
            className="form-input mt-1 block w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block font-medium text-gray-700">
            Country
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInput}
            className="form-select mt-1 block w-full"
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;




