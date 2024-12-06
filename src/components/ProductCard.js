// ProductCard.jsx
import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.prodImg} alt={product.productName} className="card-img" />
      <div className="card-body">
        <h5 className="card-title">{product.productName}</h5>
        <p className="card-text">Price: ${product.prodPrice}</p>
      </div>
    </div>
  );
}

export default ProductCard;
