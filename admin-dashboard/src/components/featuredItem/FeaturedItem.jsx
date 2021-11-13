import React from "react";
import "./FeaturedItem.scss";

function FeaturedItem({ title, amount, rate, icon }) {
  return (
    <div className="featuredItem">
      <h3 className="featuredItem__title">{title}</h3>
      <div className="featuredItem__container">
        <span className="featuredItem__amount">{amount}</span>
        <span className="featuredItem__rate">
          {rate} {icon}
        </span>
      </div>
      <p className="featuredItem__subtitle">Compared to last month</p>
    </div>
  );
}

export default FeaturedItem;
