'use client'
import MobileNavbar from "@/components/MobileNavbar";
import DashBoard from "../components/DashBoard";
import Home from "../components/HomePage/Home";
import './globals.css'
import { useEffect, useState } from "react";
import DeliveryLocation from "@/components/HomePage/DeliveryLocation";

export default function App() {
  return (
    <div>
      <Home/>
      <DeliveryLocation />
    </div>
  );
}