import React from 'react';
import './food.css';
import { useCart } from './CartContext'; // Ensure this hook is properly defined
import {Link} from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Product Name 1',
    description: 'Seed to snack: Singapore firm Zenko eyes expansion across APAC with clean label treats',
    price: 300,
    imageUrl: 'https://www.foodnavigator-asia.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/article/2021/11/15/seed-to-snack-singapore-firm-zenko-eyes-expansion-across-apac-with-clean-label-treats/12961248-4-eng-GB/Seed-to-snack-Singapore-firm-Zenko-eyes-expansion-across-APAC-with-clean-label-treats.jpg',
  },
  {
    id: 2,
    name: 'Product Name 2',
    description: 'Supreem Super Foods',
    price: 350,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0788/7306/7830/files/Supreem_web_2.png?v=1691046365',
  },
  // Add other products similarly...
];

const ProductList = () => {
  const { addToCart } = useCart(); // Extract addToCart function from useCart

  const handleAddToCart = (product) => {
    addToCart(product); // Use addToCart with the product argument
  };

  return (
    <div className="product-container">
      <h1>Organic Food</h1>
      {products.map((product) => (
        <div key={product.id} className="product-box">
          <img className="product-image" src={product.imageUrl} alt={product.name} />
          <div className="product-title">{product.name}</div>
          <div className="product-description">{product.description}</div>
          <div className="product-price">Rs.{product.price}</div>
          <input type="number" className="product-count" min="1" defaultValue="1" />
          <button className="product-add" onClick={() => handleAddToCart(product)}>
            <Link to = "/Cart" >Add to cart</Link>
          </button>
          <button className="product-buy">Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList; // Export the ProductList component
