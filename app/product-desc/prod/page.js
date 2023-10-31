'use client';

import React, { use, useState } from 'react';
import "./page.css";
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'next/navigation';
import ProductRating from '@/components/ProductRating';
import { useDispatch, useSelector } from 'react-redux';
import AddToCart from "@/components/AddToCart";


function ProductDesc() {
  const productJS = localStorage.getItem('product');
  const product = JSON.parse(productJS);
  const dispatch = useDispatch();
  console.log(product);
  console.log('Product Name:', product.productName);
  console.log('Product ID:', product.productId);
  const [prodimg, setImg] = useState(product.images[0]);

  const addToCartHandler = (product,qty) => {
    dispatch(addToCart({...product,qty}));
  }

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  const hoverHandler = (image,i) => {
    setImg(image);
  }

  // const colorOptions = props.data.colorOptions.map((item, index) => {
  //   return (
  //       <img key={index}
  //           className={[classes.ProductImage, index === props.posCurrentPreview && classes.SelectedProductImage].join(' ')}
  //           src={item.imageUrl}
  //           alt={item.styleName}
  //           onClick={() => props.onColorOptionClick(index)}
  //       />
  //   )
// })

//   const featureList = product.tags.map((item, index) => {
//     return (
//         <button
//             key={index}
//             // className={[classes.FeatureItem, index === props.showHeartBeat && classes.SelectedFeatureItem].join(' ')}
//             className="FeatureItem showHeartBeat SelectedFeatureItem"
//             // onClick={() => props.onFeatureListClick(index)}
//         >
//             {item}
//         </button>
//     )
// })

  return (
    <div>
        <div className="product-description">

          <div className='product-img-list'>
            {product.images.map((image,i)=>{
              return (
                <div
                  key={i}
                  onMouseOver={() => hoverHandler(image,i)}
                >
                  <img className="each-img" src={image} alt={product.productName} height="100px" width="100px"/>
                </div>  
              )
            })}
          </div>

          <div className='product-img'>
            {/* <img src={prodimg} alt={product.productName} height="350px" width="350px"/> */}
            <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: prodimg,
                            },
                            largeImage: {
                                src: prodimg,
                                width: 1200,
                                height: 1800,
                            },
                            enlargedImageContainerDimensions: {
                                width: '150%',
                                height: '150%',
                            },
                        }}
              />
          </div>

          <div className='product-info'>
            <div className='product-main-details'>
              <h1 className='product-name'>{product.productName}</h1>
              <p>{product.description}</p>
            </div>

            <div className='pricing-n-rating'>
              <h3 className='product-price'><span>Price:</span>{product.price}</h3>
              <ProductRating className="product-rating" rate={product.rating} count={product.reviews.length}/>
            </div>

            <AddToCart showQty={false} product={product} increasePerClick={true} />

            <div className='pricing-details'>
              <div className='det-prod'>
                <p>Free returns</p>
                <p>All prices include GST</p>
              </div>
              
              <div className='service-features'>
                  <div>
                    <img src="https://img.icons8.com/ios/50/000000/return-purchase.png"/>
                    <p>Cash on <br/>Delivery</p>
                  </div> 
                  <div>
                    <img src="https://img.icons8.com/ios/50/000000/return-purchase.png"/>
                    <p>Secure <br/>Transactions</p>
                  </div>
                  <div>
                    <img src="https://img.icons8.com/ios/50/000000/return-purchase.png"/>
                    <p>Assured <br/>Quality</p>
                  </div>
                  <div>
                    <img src="https://img.icons8.com/ios/50/000000/return-purchase.png"/>
                    <p>100% <br/>Reliable</p>
                  </div>    
              </div>
            </div>

            <div className='product-colors'>
              <h3>Colors</h3>
              <div className='colors-all'>
                {product.colors.map((color) => (
                    <p>{color.charAt(0).toUpperCase() + color.slice(1)}</p> 
                ))}
              </div>
            </div>

            <div className='product-sizes'>
              <h3>Sizes</h3>
              <div className='sizes-all'>
                {product.sizeVariants.map((size) => (
                    <p>{size.charAt(0).toUpperCase() + size.slice(1)}</p> 
                ))}
              </div>
            </div>

            <div className='product-tags'>
              <h3>Tags</h3>
              <div className='tags-all'>
                {product.tags.map((tag) => (
                    <p>{tag.charAt(0).toUpperCase() + tag.slice(1)}</p> 
                ))}
              </div>
            </div>

            <div className='product-features'>
              <h3>Features</h3>
              <div className='features-all'>
                {product.features.map((feature) => (
                    <p>{feature.charAt(0).toUpperCase() + feature.slice(1)}</p> 
                ))}
              </div>
            </div>
          </div>

            {/* <button className="PrimaryButton" onClick={() => window.open("https://www.facebook.com/thn312", "_blank")}>Buy Now</button> */}
        </div>
    </div >
  );
}

export default ProductDesc;
