import DashBoard from "../components/DashBoard";
import DeliveryLocation from "../components/HomePage/DeliveryLocation";
import './globals.css'

export default function Home() {
  return (
    <div>
      <DashBoard />
      <DeliveryLocation />
    </div>
  );
}