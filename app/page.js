'use client'
import MobileNavbar from "@/components/MobileNavbar";
import DashBoard from "../components/DashBoard";
import DeliveryLocation from "../components/HomePage/DeliveryLocation";
import './globals.css'
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <div>
      <DeliveryLocation />
    </div>
  );
}