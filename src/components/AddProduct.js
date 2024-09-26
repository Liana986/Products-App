import React, { useState } from 'react';

const AddProduct = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedImage = image.trim();
    const trimmedPrice = price.trim();
    const trimmedDescription = description.trim();
  
    
    if (!trimmedName && !trimmedImage && !trimmedPrice && !trimmedDescription) {
      alert("Please fill in at least one field.");
      return;
    }
  
    onAdd({ name: trimmedName, image: trimmedImage, price: trimmedPrice, description: trimmedDescription });
    
    
    setName('');
    setImage('');
    setPrice('');
    setDescription('');
  };

  return (
    <div className="add-product-container">
     <div className="add-product">
      <h2>Add Product</h2>
      <div className='inputs'> 

      <form>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" onClick={handleAddProduct}>Add Product</button>

      </form>
      </div>
      </div>

      <div className="product-preview">
        <h3>Preview:</h3>
        {name && <h4>{name}</h4>}
        {image && <img src={image} alt={name} style={{ width: '100px' }} />}
        {price && <p>Price: ${price}</p>}
        {description && <p>{description}</p>}
     </div>
    </div>
  );
};

export default AddProduct;