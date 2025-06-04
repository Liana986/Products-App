import React from "react";
import './ProductItem.css';

const ProductItem = ({ product }) => {
  return (
    <li className="product-item">
      <div className="product-name">{product.name}</div>
      <div className="product-price">{product.price}</div>
      {product.description && (
        <div className="product-description">{product.description}</div>
      )}
    </li>
  );
};

export default ProductItem;
