import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductDelete from './ProductDelete';

const ProductEdit = ({ products, onEdit, onDelete }) => {
  const { id } = useParams();
  const product = products[parseInt(id, 10)];
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setImage(product.image);
      setPrice(product.price);
      setDescription(product.description);
    }
  }, [product]);

  const handleEditProduct = () => {
    onEdit(id, { name, image, price, description });
    navigate('/products');
  };

  const handleDeleteProduct = () => {
    onDelete(id);
    navigate('/products');
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>Edit Product</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
      <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button onClick={handleEditProduct}>Save Changes</button>
      <ProductDelete onDelete={handleDeleteProduct} />
    </div>
  );
};

export default ProductEdit;