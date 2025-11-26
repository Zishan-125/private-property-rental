import React from "react";
import "./Card.css";

import { Link } from "react-router-dom";

function Card({ image1, image2, image3, title, price, description, location }) {
  return (
    <Link 
      to="/property"
      state={{ image1, image2, image3, title, price, description, location }}
      className="card-link"
    >
      <div className="card">
        <div className="images">
          <img src={image1} className="img active" alt="" />
          <img src={image2} className="img second" alt="" />
          <img src={image3} className="img third" alt="" />

          
        </div>

        <div className="card-info">
          <span className="card-title">{title}</span>
          <span className="card-price">{price} Tk / Month</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
