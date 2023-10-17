'use client';
import './DashBoard.css'
import { useUser } from '@auth0/nextjs-auth0/client';
import UserLogoDropDown from './UserLogoDropDown';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function DashBoard() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  const handleLogin = () => {
    router.push("/api/auth/login")
  }

  const handleGotoHome = () => {
    router.push("/");
  }

  const handleGoCreateShop = () => {
    if(user)router.push(`/create/shop?${user}`);
  }

  return (
    <div className='dashboard'>
      <div className='companyname btn' onClick={handleGotoHome}> Nexus </div>
      <div className='dashboardlinks'>
        <div className='btn' onClick={handleGoCreateShop}>Set Up Your Shop</div>
        <div className='btn'> View Cart </div>
        {!user && <div onClick={handleLogin} className='btn'> Login </div>}
        <div className='btn'><UserLogoDropDown /></div>
      </div>
    </div>
  )
}

export default DashBoard