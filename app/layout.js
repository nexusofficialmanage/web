'use client'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import DashBoard from "../components/DashBoard";
import Footer from "../components/Footer";
import { StoreProvider } from '@/redux/StoreProvider';

export default function RootLayout({ children }) {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
  
    handleResize();
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <html lang="en">
      <UserProvider>
        <StoreProvider>
        <body>
          {!isMobileView && <DashBoard />}
          {children}
          <Footer/>
          {isMobileView && <MobileNavbar />}
          
        </body>
        </StoreProvider>
      </UserProvider>
    </html>
  );
}
