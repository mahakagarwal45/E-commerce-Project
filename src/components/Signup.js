import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import './Signup.css';
import {signup} from '../services/apiServices';
export const Signup =()=>{

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email:'',
      password:''
    })

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = async(e) => {
      e.preventDefault();
      try{
        const response = await signup(formData);
        console.log("response",response)
        alert("You have successfully Registered")
        navigate('/');
      }
      catch(error){
        alert('Error during signup, please try again');
      }
  };

    return (
      <div className="main-container">
      <div className="signup-box p-5 shadow-lg">
        <h2 className="text-center mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="first">First Name:  </label>
            <input type="text" className="form-control" id="first" name="firstName" placeholder="First" value = {formData.firstName} onChange = {handleChange} maxLength={10} minLength={3} required />
          </div>
          <div className="form-group">
            <label htmlFor="last">Last Name:  </label>
            <input type="text" className="form-control" id="last" name="lastName" placeholder="Last" value = {formData.lastName} onChange = {handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:  </label>
            <input type="email" className="form-control" id="email" name="email" placeholder="abcd@gmai.com" value = {formData.email} onChange = {handleChange}  required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:  </label>
            <input type="password" className="form-control" id="password" name="password" placeholder="Password" value = {formData.password} onChange = {handleChange} maxLength={12} minLength={8} required />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
    };

    