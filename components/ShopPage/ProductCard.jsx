import React from 'react'
import './ProductCard.css'

function ProductCard({productDetails}) {
  return (
    <div className='productcard'>
      <div className='productimage'>
        <img src='./assests/images/coat.jpg'/>
      </div>
      <div className='productinformation'>
        <div>{productDetails.productName}</div>
      </div>
    </div>
  )
}

export default ProductCard
