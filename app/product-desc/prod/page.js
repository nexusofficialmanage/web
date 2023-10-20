'use client';

import React from 'react';
import { useParams } from 'next/navigation';

function ProductDesc() {
  const productJS = localStorage.getItem('product');
  const product = JSON.parse(productJS);
  console.log(product);
  console.log('Product Name:', product.productName);
  console.log('Product ID:', product.productId);

  return (
    <div>
      <h1>Product Description</h1>
      <p>Product Name: {product.productName}</p>
      <p>Product Description:</p>
    </div>
  );
}

export default ProductDesc;
