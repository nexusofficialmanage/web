import React from 'react'
import ProductCard from './ProductCard'
import './Overview.css';

function Overview() {
    const products = [{productName: 'coat'},{productName: 'coat1'}]
  return (
    <div className='overview'>
      {
        products.map((product) => {
            return <ProductCard productDetails={product}/>
        })
      }
    </div>
  )
}

export default Overview
