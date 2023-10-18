import React from 'react';
import './ProductCard.css';
import { useRouter } from 'next/navigation';

function ProductCard({ product }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product-desc/prod?product=${JSON.stringify(product)}`);
  };

  return (
    <div className="product" onClick={handleClick}>
      <div className="product-image">
        <img src={product.images[0]} alt={`Image of ${product.productName}`} />
      </div>
      <div className="productdetail">
        <div className="product-specifics">
          <div className="product-name">{product?.productName}</div>
          <div className="product-rating">Rating: ⭐​​*{product?.rating}</div>
          <div className="product-price">Price: {product?.price}</div>
          <div className="product-description">Product Description: {product?.description}</div>
          <div className="product-tags">Product Tags:</div>
          {product.tags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
