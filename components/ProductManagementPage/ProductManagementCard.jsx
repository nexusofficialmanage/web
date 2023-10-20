import React, { useState } from 'react'
import './ProductManagement.css'

function ProductManagementCard({product}) {
    const [productQuantity, setProductQuantity] = useState(0);
    const [updated, setUpdated] = useState(true);
  return (
    <div className='productmanagementcard'>
      <div className='productname'>{product?.productName}</div>
      <div className='productquantity'>ProductQuantity: <div className='productquantityincrementer' onClick={() => {
        setProductQuantity(Number(productQuantity) + 1);
        setUpdated(false);
      }}>+</div>
      <div className='productquantitydecrementer' onClick={() => {
        setProductQuantity(Math.max(Number(productQuantity) - 1, 0));
        setUpdated(false)
      }}>-</div>
      {productQuantity}
      </div>
      <div className='updateoption'>{!updated?<div onClick={() => {
        setUpdated(true);
        setProductQuantity(0);
      }} style={{backgroundColor: 'red', color: 'white'}}>Update</div> : <div>Upto Date</div>}</div>
    </div>
  )
}

export default ProductManagementCard
