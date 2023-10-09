import { useRouter } from 'next/navigation';
import React from 'react'
import '../app/globals.css'
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/Ai';
import './MobileNavbar.css'
import UserLogoDropDown from './UserLogoDropDown';

function MobileNavbar() {
    const router = useRouter();
    const handleViewCart = () => {
        router.push("/")
    }
  return (
    <div className='mobilenavbar'>
      <AiOutlineHome onClick={handleViewCart} className='icn'/>
      <AiOutlineShoppingCart onClick={handleViewCart} className='icn'/>
      <UserLogoDropDown />
    </div>
  )
}

export default MobileNavbar
