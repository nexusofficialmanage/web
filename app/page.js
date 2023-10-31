'use client'
import MobileNavbar from "@/components/MobileNavbar";
import DashBoard from "../components/DashBoard";
import Home from "../components/HomePage/Home";
import './globals.css'
import { useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import DeliveryLocation from "@/components/HomePage/DeliveryLocation";
import { hideLoading } from "@/redux/slices/cartSlice";



export default function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(hideLoading());
  }, [dispatch])

  return (
    <div>
      <Home/>
    </div>
  );
}