'use client'
import React, { useEffect, useState } from 'react';
import './page.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import ProductCard from '@/components/ShopPage/ProductCard';
import LoadingPage from '@/components/LoadingPage';

function Page() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const [detail, setDetail] = useState("overview");
  const [shop, setShop] = useState(null); // Initialize shop state as null
  const [currentUser, setCurrentUser] = useState(false);
  const pathname = usePathname();
  const [loading, setLoading] = useState(true); // Add a loading state

  const handleGoToAddProduct = () => {
    const storeid = pathname.substring(1);
    router.push(`/create/product?storeid=${storeid}`);
  }

  useEffect(() => {
    const shopDetail = async () => {
      try {
        const response = await axios.get(`/api/display/shop${pathname}`);
        console.log(response.data);
        setShop(response.data);
        if (response.data.userid === user.sub) {
          setCurrentUser(true);
        }
        setLoading(false); // Set loading to false when data is ready
      } catch (error) {
        console.error('Error fetching shop data:', error);
        setLoading(false); // Ensure loading is set to false even in case of an error
      }
    }

    shopDetail();
  }, [pathname, user]);

  return (
    <div className="shop">
      {loading ? ( // Conditionally render the loading component
        <LoadingPage />
      ) : (
        <div>
          <div className="banner">
          <div className="bannerinfo">
            <div className="bannershopname">{shop?.shopName}</div>
            <div className="bannershoptagline">{shop?.shopTagline}</div>
            <a href='#shopnow' className='shopnowbutton'>Shop Now</a>
          </div>
          <div className="bannerimage">
            <img src={shop?.images[0]} className="zoomIn" alt="Castle" />
          </div>
          <div className='viewcards'>
            <a href='#description' className='viewcard'>
                <div>Description</div>
                <div className='viewcarddes'>Learn More about us</div>
            </a>
            <div className='viewcard'>
              <div>Review</div>
              <div className='viewcarddes'>Enter our Review system to rate this shop and read other's reviews</div>
            </div>
            <a href='#contactus' className='viewcard'>
                <div>Contact Us</div>
                <div className='viewcarddes'>Wanna Get In Touch?</div>
            </a>
          </div>
          </div>
          <div className="shopdetails">
            <div className='descriptiondetails' id='description'>
              <div className='descriptiondetailswriting'>
                <div className='descriptiondetailstitle'>Here is a little bit about <span style={{ color: 'red' }}>Ourselves</span></div>
                <div className='descriptiondetailstext'>
                  {shop?.description.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              </div>
              <div className='contactinfo'>
                <div className='address'>
                  <h2>Contact Information</h2>
                  <p>
                    <strong>Address:</strong> {shop?.addressLine} <br />
                    <strong>City:</strong> {shop?.city} <br />
                    <strong>State:</strong> {shop?.state}<br />
                    <strong>Country:</strong> {shop?.country}
                  </p>
                  <div className='phone'>
                    <h3>Phone Numbers:</h3>
                    <ul>
                      {shop?.phoneNumbers && shop?.phoneNumbers.map((phoneNumber) => {
                        return <li>{phoneNumber}</li>
                      })}
                    </ul>
                  </div>
                  <div className='email'>
                    <h3>Email Addresses:</h3>
                    <ul>
                      {shop?.emailIds && shop?.emailIds.map((emailId) => {
                        return <li>{emailId}</li>
                      })}
                    </ul>
                  </div>
                  <div className='social-media'>
                    <h3>Social Media:</h3>
                    <ul>
                      <li>
                        <a href={shop?.facebookLink}>
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a href={shop?.twitterLink}>
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a href={`https://www.instagram.com/${shop?.instagramLink}`}>
                          Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {currentUser && <button onClick={handleGoToAddProduct}>Add a product</button>}
          </div>
          <div className='products' id='shopnow'>
            {shop && shop.products.map((product) => {
              {console.log(product)}
              return <ProductCard product={product} key={product.id} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
