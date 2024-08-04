// ProductCategories.jsx
import React from 'react';
import './Care.css';
import { useCart } from './CartContext';
import {Link} from 'react-router-dom';

const ProductCategories = () => {
  const categories = [
    { id: 1, name: 'Skincare', description: 'Products for a glowing skin', price: 'Rs 599', imageUrl: 'glow.webp' },
    { id: 2, name: 'Haircare', description: 'Products for healthy hair', price: 'Rs 358', imageUrl: 'haircare.webp' },
    { id: 3, name: 'Oral Care', description: 'Products for dental hygiene', price: 'Rs 400', imageUrl: 'oralcare.webp' },
    { id: 4, name: 'Body Care', description: 'Products for body wellness', price: 'Rs 999', imageUrl: 'bodycare.jpg' },
    { id: 5, name: 'Sun Care', description: 'Products for UV protection', price: 'Rs 329', imageUrl: 'suncare.webp' },
    { id: 6, name: 'Fragrances', description: 'Perfumes and Deodrants', price: 'Rs 329', imageUrl: 'perfume.webp' },
    { id: 7, name: "Men's Grooming", description: "Products for men's grooming", price: 'Rs 750', imageUrl: 'mensgrooming.jpg' },
    { id: 8, name: 'Makeup', description: 'Makeup products Organic', price: 'Rs 499', imageUrl: 'makeup.webp' },
    { id: 9, name: 'Anti-Aging', description: 'Anti-aging products', price: 'Rs 654', imageUrl: 'antiage.webp' },
  ];

  const { addToCart } = useCart();

  const handleAddToCart = (category) => {
    addToCart(category);
  };

  return (
    <div className="product-categories">
      <h2>Personal Care Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} className="category-itemdi">
            <img src={process.env.PUBLIC_URL + '/' + category.imageUrl} alt={category.name} className="category-image" />
            <div className="category-info">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <p>{category.price}</p>
              <input type="number" className="product-count" min="1" defaultValue="1" />
              <p>
                <button variant="outlined">Buy Now</button>
              </p>
              <p>
                <button variant="outlined" onClick={() => handleAddToCart(category)}>
                <Link to = "/Cart" >Add to cart</Link>
                </button>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategories;
