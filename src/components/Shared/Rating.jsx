import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value = 0, className = "" }) => (
  <div className={`flex items-center gap-0.5 text-amber-400 ${className}`} aria-label={`Rated ${value} out of 5`}>
    {[1, 2, 3, 4, 5].map((i) =>
      value >= i ? <FaStar key={i} /> : value >= i - 0.5 ? <FaStarHalfAlt key={i} /> : <FaRegStar key={i} />
    )}
  </div>
);

export default Rating;
