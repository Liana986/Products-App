import React, { useState } from "react";
import ProductItem from './ProductItem';
import SearchInput from './SearchInput';
import './Products.css';

const Products = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product => {
    const term = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(term) ||
      product.price.toLowerCase().includes(term)
    );
  });

  return (
    <div className="products-container">
      <h2>Products List</h2>
      <SearchInput searchTerm={searchTerm} handleSearch={setSearchTerm} />
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul className="products-list">
          {filteredProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Products;