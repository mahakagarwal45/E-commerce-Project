import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import {Signup} from './components/Signup';
import {Login} from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Supplements from './components/Supplements'; // Your Products component
import Health from './components/Health';
import Food from './components/food';
import Care from './components/Care';
import Cart from './components/Cart'; // Import the Cart component
import { CartProvider } from './components/CartContext'; // Import the CartProvide
import {ContactUs} from './components/ContactUs'
import ProfilePage from './components/ProfilePage'
import Mental from './components/mental'
import Meditationaids from './components/meditationaids'
import Fitness from './components/fitnessEquipment'
import FAQ from './components/FAQ'
// import About from './About';

function App() {
  return (
    <CartProvider>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/supplements" element={<Supplements />} />
        <Route path="/health" element={<Health />} />
         <Route path="/food" element={<Food />} />
         <Route path="/care" element={<Care />} />
          <Route path="/supplements" element={<Supplements />} />
          <Route path="/cart" element={<Cart />} /> {/* Route for the cart page */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/mental" element={<Mental />} />
          <Route path="/meditationaids" element={<Meditationaids />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/faq" element={<FAQ />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
    </CartProvider>

  );
}

export default App;
