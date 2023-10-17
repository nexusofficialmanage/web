import React from 'react';
import './ProductCard.css';

function ProductCard({product}) {
  return (
    <div className='product'>
      <div className='productimage'>
        <img src='assests/images/dosa.png' />
      </div>
      <div className='productdetail'>
        <div className='productnamerating'>
            <div>{product?.name}</div>
            <div>⭐​​ {product?.rating}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
