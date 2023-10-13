import React from "react";
import "./ShopCard.css";
import { useRouter } from "next/navigation";

export default function ShopCard({shop}) {
  const router = useRouter();

  const handleGoToShop = () => {
    localStorage.setItem('storeid', shop.storeid);
    router.push(`/${shop.storeid}`)
  }

  return (
    <div onClick={handleGoToShop}>
      <div className="event_container">
        <div className="eventDetail_container">
            <div className="event_date">
                <h6>{shop.category} of the shop</h6>
            </div>

            <img src={shop.images[0]} />

            <div className="event_details">
                {/* <a href={props.eventLink} className="link"> */}
                <h3>{shop.shopName}</h3>
                {/* </a> */}
                {/* <a href={props.eventLink} className="link"> */}
                <p>{shop.shopTagline}</p>
                {/* </a> */}
            </div>

            <div className="shop-loc-rate">
                <div className="shop_rating">
                    <h6>Rating: {shop.rating}</h6>
                </div>

                <div className="shop_dist">
                    {/* <h6>Time: {props.events_on}</h6> */}
                </div>
            </div>
            

        </div>
      </div>
    </div>
  );
}
