import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="full-image">
      <div className="left-side-text">
      <h1>Empowering Your Health Journey, <br/>One Step at a Time.</h1>
          <p className="quote">
            <h2 className="heading">Welcome to Nurture: Your Wellness Awaits!</h2>
            Unlock your health's potential with our curated wellness solutions.<br/> Start your journey to vibrant living<br/> and a healthier, more fulfilled you today.          </p>
        </div>
        <img
          src="https://www.drkimbrengle.com/wp-content/uploads/2019/01/healthy-lifestyle.jpg"
          alt="Health and Wellness"
          className="full-image-img"
        />
      </div>
    </div>

  );
};

export default Home;
