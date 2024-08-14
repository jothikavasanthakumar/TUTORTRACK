import React from 'react';
import './CSS/Login.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
   
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', formData);
      console.log(response.data); 
      
      if(response.data){
        navigate("/");
      }
      else{
        console.error('Login failed:',response.data.message);
        alert("invalid details");
      }
  } catch (error) {
      console.error(error); // Handle error
  }
    const { email, password} = formData;
    if (!email || !password ) {
      setError('Please fill out all fields.');
      return;
    }
    setError('');
    // Handle login logic
    console.log('Login submitted with:', formData);
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <h2 className="login-heading">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          {/* <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div> */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div> */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div><center>
                      <Link to ='/'><button type='submit'>Login</button></Link></center>
          {/* <button type="submit" className="login-button">
            Login
          </button> */}
          <p className='login-login'>
                Don't have an account?
            <Link to='/signup'> <span>  Click Here</span>  </Link>  
            </p>
          <p className='login-login'>
                Admin?
            <Link to='/adminlog'> <span>  Click Here</span>  </Link>  
            </p>
        </form>
      </div>
    </div>
  );
};

export default Login;