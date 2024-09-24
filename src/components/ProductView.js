import React from 'react';
import { useParams } from 'react-router-dom';

const ProductView = ({ products }) => {
  const { id } = useParams();
  const product = products[id];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-view">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductView;