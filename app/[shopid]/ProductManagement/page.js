'use client'
import React, { useEffect, useState } from 'react'
import './page.css'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import ProductManagementCard from '@/components/ProductManagementPage/ProductManagementCard';
import axios from 'axios';

function page() {
  const router = useRouter();
  const pathname = usePathname();
  const storeid = pathname.substring(1, pathname.length - 18);
  const [shop, setShop] = useState([]);

  const handleGoToAddProduct = () => {
    router.push(`/create/product?storeid=${storeid}`);
  }

  const handleGenerateReceipt = () => {
    router.push(`/${storeid}/ProductManagement/GenerateReceipt`);
  }

  useEffect(() => {
    const getAllshops = async() => {
        const response = await axios.get(`/api/display/shop/${storeid}`);
        console.log(response.data)
        setShop(response.data);
    }
    getAllshops();
  }, []);

  return (
    <div className='productmanagement'>
      <div className='dashboardproductmanagement'>
        <div onClick={handleGenerateReceipt}> Generate a Receipt </div>
        <div><button onClick={handleGoToAddProduct}>Add a product</button></div>
      </div>
      <div className='productsdisplay'>
        {
          shop.products
          &&
          shop?.products.map((product) => {
            return <ProductManagementCard product={product}/>
          })}
      </div>
    </div>
  )
}

export default page
