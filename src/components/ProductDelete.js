import React from 'react';

const ProductDelete = ({ onDelete }) => {
  return (
    <button onClick={onDelete}>
      Delete
    </button>
  );
};

export default ProductDelete;