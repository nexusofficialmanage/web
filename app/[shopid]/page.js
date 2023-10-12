import React from 'react'
import './page.css'

function page() {
  return (
    <div className='shoppage'>
      <div className='firstsection'>
        <div className='shopinfo'>
          <div className='shopname'>My Shop</div>
          <div className='shopdesc'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
          <div className='shopnow'> Shop Now</div>
        </div>
        <div className='bannerimage'>
          <img src='assests/images/clement-fusil-Fpqx6GGXfXs-unsplash.jpg'/>
        </div>
      </div>
    </div>
  )
}

export default page
