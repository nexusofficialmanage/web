import React from "react";
import "./ShopCard.css";

export default function ShopCard(props) {
  return (
    <>
      <div className="event_container">
        <div className="eventDetail_container">
            <div className="event_date">
                <h6>{props.events_on} of the shop</h6>
            </div>

            <img src={props.template} alt={props.event_name} />

            <div className="event_details">
                <a href={props.eventLink} className="link">
                <h3>{props.event_name}</h3>
                </a>
                <a href={props.eventLink} className="link">
                <p>{props.event_para}</p>
                </a>
            </div>

            <div className="shop-loc-rate">
                <div className="shop_rating">
                    <h6>Rating: {props.events_on}</h6>
                </div>

                <div className="shop_dist">
                    <h6>Time: {props.events_on}</h6>
                </div>
            </div>
            

        </div>
      </div>
    </>
  );
}
