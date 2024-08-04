// Products.jsx
import React from 'react';
import './Supplements.css';
import { useCart } from './CartContext';
import {Link} from 'react-router-dom';

const products = [
  {
    src: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRtlCPD_bVvuCEZ1tV07vmxIw3YbKLu9Hq9W9xPMSec7ac0rGhICpSm6O6-jtgYmdu7SxbcEzi9dFr_w_XU2VxnclmdsxrfQc6gBfFOVWCys-CkfQms7YaS&usqp=CAE',
    name: 'Centrum-OstoCalcium',
    description: 'Ostocalcium with Vitamin D and Calcium',
    price: 'Rs.450',
  },
  {
    src: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTw14cgeRQeg6qF4ngsODBbT_tKWtSA6nL5Gpq2DSbcrpovdOOQQJoFdOFPeTpUMcHJ36TJDuZwn2HVBU56l36wYQO_jGnLZAR_PogMDQaICO-S9Z9DWCcL&usqp=CAE',
    name: 'vitals',
    description: 'Multivitamin with probiotics',
    price: 'Rs.390',
  },
  // Add more products as needed
];

const Products = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <>
      <nav>Supplements And Vitamins</nav>
      <div className="container">
        {products.map((product, index) => (
          <div key={index} className="box">
            <img className="image" src={product.src} alt={product.name} width="300px" />
            <div className="title">{product.name}</div>
            <div className="description">{product.description}</div>
            <div className="price">{product.price}</div>
            <input type="number" className="count" min="1" defaultValue="1" />
            <button className="add" onClick={() => handleAddToCart(product)}> <Link to = "/Cart" >Add to cart</Link></button>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
