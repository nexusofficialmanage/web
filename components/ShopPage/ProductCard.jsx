import React from 'react';
import './ProductCard.css';

function ProductCard({product}) {
  return (
    <div className='product'>
      <div className='product-image'>
        <img src={product.images[0]} />
      </div>
      <div className='productdetail'>
        <div className='product-specifics'>
            <div className='product-name'>{product?.productName}</div>
            <div className='product-rating'>Rating: ⭐​​*{product?.rating}</div>
            <div className='product-price'>Price: {product?.price}</div>
            <div className='product-description'>Product Description: {product?.description}</div>
            <div className='product-tags'>Product Tags:</div>
            {product.tags.map((tags) => (
            <div key={tags}>{tags}</div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
