"use client";

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

export default function ProductRating({rate,count}) {
    return (
        <div className="review-card">
            <Rating
            style={{maxWidth: 100}}
            readonly={true}
            value={rate}
            />
            {count} reviews
        </div>        
    );
}
