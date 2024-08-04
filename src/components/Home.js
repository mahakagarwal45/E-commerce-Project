import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="full-image">
      <div className="left-side-text">
      <h1>Empowering Your Health Journey, <br/>One Step at a Time.</h1>
          <p className="quote">
            <h2 className="heading">Welcome to Nurture: Your Wellness Awaits!</h2>
            Unlock your health's potential with our curated wellness solutions.<br/> Start your journey to vibrant living<br/> and a healthier, more fulfilled you today.          </p>
            <button className="button">Shop Now</button>
        </div>

        <img
          src="https://www.drkimbrengle.com/wp-content/uploads/2019/01/healthy-lifestyle.jpg"
          alt="Health and Wellness"
          className="full-image-img"
        />
        </div>

      <main className="main-content">
        <section className="left-section">
          <img src="https://myaimstore.com/debrapugh/files/2019/01/good-health.jpg" alt="Left Image" className="left-image" height =  "300px" width = "500px" opacity = "12.5" />
        </section>

        <section className="center-section">
          <h2 className="center-title">Get to know us</h2>
          <p className="center-description">
          Discover a comprehensive range of health and wellness products on our platform. We feature everything from organic supplements to innovative fitness equipment, all designed with your health goals in mind. Explore our user-friendly interface and enjoy a seamless shopping experience tailored to your needs! </p>
          <button className="learn-more">Learn More</button>
        </section>

      </main>

      <div className="info-section">
        <div className="info-item">
          <div className="icon"><i className="fas fa-shipping-fast"></i></div>
          <div className="info-text">
            <h3>Free Shipping</h3>
            <p>Free shipping world wide</p>
          </div>
        </div>
        <div className="info-item">
          <div className="icon"><i className="fas fa-headset"></i></div>
          <div className="info-text">
            <h3>Support 24/7</h3>
            <p>Contact us 24 hours a day</p>
          </div>
        </div>
        <div className="info-item">
          <div className="icon"><i className="fas fa-lock"></i></div>
          <div className="info-text">
            <h3>Secure Payments</h3>
            <p>100% payment protection</p>
          </div>
        </div>
        <div className="info-item">
          <div className="icon"><i className="fas fa-redo"></i></div>
          <div className="info-text">
            <h3>Easy Return</h3>
            <p>Simple returns policy</p>
          </div>
        </div>
      </div>

      <div className="popular-properties-section">
        <h2 className="section-title">Featured Products</h2>
        <div className="properties-container">
          <div className="property-card">
            <img src="http://nikolaisroof.com/wp-content/uploads/2020/08/Organic-food-fraud.jpg" alt="Property 1" className="property-image" />
            <h3 className="property-title">Organic Foods</h3>
            <p className="property-added">It is grown without synthetic pesticides, fertilizers, ensuring a natural and eco-friendly choice.</p>
            <button className = "button"> <Link to="/food" className="nav-link">View More</Link></button>
          </div>
          <div className="property-card">
            <img src="https://dep.com.vn/wp-content/uploads/2022/08/beauty-skincare-800.jpg" alt="Property 2" className="property-image" />
            <h3 className="property-title">Personal Care</h3>
            <p className="property-location">It involves maintaining hygiene and grooming to enhance health and well-being.</p>
            <button className = "button"><Link to="/care"> View more</Link></button>
          </div>
          <div className="property-card">
            <img src="https://www.ideafit.com/wp-content/uploads/2021/08/Small-Exercise-Equipment.jpg" alt="Property 3" className="property-image" />
            <h3 className="property-title">Fitness Equipment</h3>
            <p className="property-location">It aids in physical exercise to improve strength, endurance, and overall health.</p>
            <button className = "button"> <Link to="/fitness" className="nav-link">View More</Link></button>
          </div>
          <div className="property-card">
            <img src="https://helios-i.mashable.com/imagery/articles/01CJBek1kOe0amqFsLOBqZn/hero-image.fill.size_1200x675.v1671649627.jpg" alt="Property 1" className="property-image" />
            <h3 className="property-title">Mental Wellness</h3>
            <p className="property-added">It involves practices that support emotional, psychological, and social well-being</p>
            <button className = "button"> <Link to="/mental" className="nav-link">View More</Link></button>
          </div>
          <div className="property-card">
            <img src="http://precisionmedicineforum.com/wp-content/uploads/2017/11/Fitbit.jpg" alt="Property 2" className="property-image" />
            <h3 className="property-title">Health Devices</h3>
            <p className="property-location">It monitor and improve physical well-being and medical conditions</p>
            <button className = "button"> <Link to="/health"> View more</Link></button>
          </div>
          <div className="property-card">
            <img src="http://media3.s-nbcnews.com/i/newscms/2015_21/563896/multivitamin-vitamin-stock-today-tease-150520_ee4d7d6ac83cd62a258ea3b4a90aaf22.jpg" alt="Property 3" className="property-image" />
            <h3 className="property-title">Supplements and Vitamins</h3>
            <p className="property-location">It provide essential nutrients to support overall health.      </p>
            <button className = "button"><Link to="/supplements"> View more</Link></button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
