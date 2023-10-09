'use client'
import MobileNavbar from "@/components/MobileNavbar";
import DashBoard from "../components/DashBoard";
import DeliveryLocation from "../components/HomePage/DeliveryLocation";
import './globals.css'
import { useEffect, useState } from "react";

export default function Home() {

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
    <div>
      {!isMobileView && <DashBoard />}
      <DeliveryLocation />
      {isMobileView && <MobileNavbar />}
    </div>
  );
}