import React from 'react';
import './ProductCard.css';

function ProductCard({product}) {
  return (
    <div className='product'>
      <div className='productimage'>
        <img src={product.images[0]} />
      </div>
      <div className='productdetail'>
        <div className='productnamerating'>
            <div>{product?.productName}</div>
            <div>⭐​​ {product?.rating}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
