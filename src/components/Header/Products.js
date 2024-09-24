import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products }) => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} className="product-card">
            <h4>{product.name}</h4>
            <img src={product.image} alt={product.name} />
            <Link to={`/view/${index}`}>View</Link>
            <Link to={`/edit/${index}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;