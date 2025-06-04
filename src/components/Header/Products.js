import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css'; // Ստեղծիր այս ֆայլը style-երի համար

const Products = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(term) ||
      product.price.toLowerCase().includes(term) ||
      (product.description && product.description.toLowerCase().includes(term))
    );
  });

  return (
    <div className="product-list">
      <h2>Product List</h2>
      
      <input
        type="text"
        placeholder="Search by name, price, description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {filteredProducts.map((product, index) => (
            <li key={index} className="product-card">
              <h4>{product.name}</h4>
              <img src={product.image} alt={product.name} />
              <p>{product.price}</p>
              <div className="product-changes">
                <Link to={`/view/${index}`}>View</Link>
                <Link to={`/edit/${index}`}>Edit</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;