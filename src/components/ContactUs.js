import { useNavigate } from 'react-router-dom';
export const ContactUs =()=>{
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
      };


    return (
        <div className="main">
      <img src="pic_trulli.jpg" alt="Contact Us"></img>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="text" name="FirstName" required  />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="text" name="lastname"  />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  
}