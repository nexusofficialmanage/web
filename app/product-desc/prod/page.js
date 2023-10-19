'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';

function ProductDesc() {
  const product = localstorage.getitem('product');

  return (
    <div>
      <h1>Product Description</h1>
      <p>Product Name: {product}</p>
      <p>Product Description:</p>
    </div>
  );
}

export default ProductDesc;
