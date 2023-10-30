'use client'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import DashBoard from "../components/DashBoard";
import Footer from "../components/Footer";
import {EdgeStoreProvider} from "../lib/edgestore";

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
        <body>
          {!isMobileView && <DashBoard />}
          {children}
          <Footer/>
          {isMobileView && <MobileNavbar />}
        </body>
      </UserProvider>
    </html>
  );
}
