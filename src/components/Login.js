import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the custom CSS file
// import {login} from './services/apiServices';

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Form data:', formData); 
    try {
      const response = await fetch('http://localhost:4001/api/user/login');   // calling the API in login.js file
      setTimeout(() => {
        navigate('/Dashboard');
    }, 500);  
    }
    catch(error){
      alert('Error during login, please try again');
    }
};

  return (
    <div className="main-container">
      <div className="login-box p-5 shadow-lg">
        <h1 className="text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="emailId">Email:</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="abcd@gmail.com" value = {formData.email} onChange = {handleChange}  required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="password" value = {formData.password} onChange = {handleChange}  required />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-4">Login</button>
        </form>
        <h4 className="text-center">Don't have an account yet?</h4>
        <h4 className="text-center"><Link to='./Signup'>Create an account</Link></h4>
      </div>
    </div>
  );
};
