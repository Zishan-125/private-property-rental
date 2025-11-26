import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import { FaWifi, FaTv, FaParking, FaSwimmer, FaSnowflake } from "react-icons/fa";
import { GiCookingPot, GiTreehouse } from "react-icons/gi";
import "./PropertyDetails.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function PropertyDetails() {
  const { state } = useLocation();
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  if (!state) return <h2>Property not found</h2>;

  const {
    image1,
    image2,
    image3,
    title,
    price,
    description,
    location,
    host = { name: "John Doe", avatar: "https://i.pravatar.cc/100" },
  } = state;

  // Calculate total days for booking
  const totalDays =
    Math.ceil(
      (range[0].endDate - range[0].startDate) / (1000 * 60 * 60 * 24)
    ) || 1;
  const totalPrice = totalDays * price;

  return (
    <div className="property-page">
      {/* Title & Location */}
      <h1 className="property-title">{title}</h1>
      <p className="property-location">{location}</p>

      {/* Image Gallery */}
      <div className="gallery">
        <img src={image1} className="big-img" alt="" />
        <div className="small-imgs">
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </div>
      </div>

      <div className="main-grid">
        {/* Left Content */}
        <div className="left">
          {/* About */}
          <div className="details-box">
            <h2>About this property</h2>
            <p className="desc-text">
              {description ||
                "This property offers a clean, comfortable, and peaceful living space with essential facilities designed for a satisfying stay. Ideal for students, families, and professionals looking for a secure and convenient location."}
            </p>

            {/* Highlights */}
            <div className="highlights">
              <h3>What this place offers</h3>
              <ul>
                <li>• Peaceful and secure neighborhood</li>
                <li>• Well-ventilated rooms with natural light</li>
                <li>• Modern fittings and clean surroundings</li>
                <li>• Close to shops, transportation, and essentials</li>
                <li>• Budget-friendly long-term rental option</li>
              </ul>
            </div>
          </div>

          {/* Amenities */}
          <div className="amenities-box">
            <h2>Amenities</h2>
            <ul className="amenities-list">
              <li>
                <FaWifi /> Free WiFi
              </li>
              <li>
                <FaSnowflake /> Air Conditioning
              </li>
              <li>
                <FaParking /> Parking Available
              </li>
              <li>
                <FaTv /> Smart TV
              </li>
              <li>
                <GiCookingPot /> Kitchen Access
              </li>
              <li>
                <GiTreehouse /> Balcony View
              </li>
              <li>24/7 Water Supply</li>
              <li>Security Camera Outside</li>
            </ul>
          </div>

          {/* Nearby Locations */}
          <div className="nearby-box">
            <h2>Nearby Places</h2>
            <ul>
              <li>📍 Grocery Store – 150m</li>
              <li>📍 Bus Stand – 200m</li>
              <li>📍 Hospital – 500m</li>
              <li>📍 Shopping Mall – 1 km</li>
            </ul>
          </div>

          {/* Reviews */}
          <div className="reviews-box">
            <h2>Reviews</h2>

            <div className="review">
              <h4>Zayed Khan</h4>
              <p>One of the best properties I have rented. Clean and peaceful.</p>
            </div>

            <div className="review">
              <h4>Maria Afsana</h4>
              <p>Perfect location and budget-friendly. Highly recommended.</p>
            </div>

            <div className="review">
              <h4>Tanvir Rahman</h4>
              <p>The owner was very helpful. Overall excellent experience.</p>
            </div>
          </div>

          {/* Host Info */}
          <div className="host-box">
            <h2>Hosted by</h2>
            <div className="host-info">
              <img src={host.avatar} alt="" />
              <p>{host.name}</p>
            </div>
          </div>

          {/* Google Maps */}
          <div className="map-box">
            <h2>Location on Map</h2>
            <iframe
              title="map"
              className="map-frame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.546382862427!2d90.4125182743664!3d23.872017284539234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c400f90c0c0d%3A0xf7a686510d94f1b!2sUttara%20Dhaka!5e0!3m2!1sen!2sbd!4v1705949234235!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Property Rules */}
          <div className="rules-box">
            <h2>Property Rules</h2>
            <ul>
              <li>✔ Check-in: 2:00 PM – 10:00 PM</li>
              <li>✔ Check-out: 11:00 AM</li>
              <li>✔ No smoking inside the property</li>
              <li>✔ Pets allowed only on request</li>
              <li>✔ Events or parties not allowed</li>
            </ul>
          </div>
        </div>

        {/* Right Booking Box */}
        <div className="right">
          <div className="price-box">
            <h2>{price} Tk / Month</h2>

            <DateRange
              ranges={range}
              onChange={(item) => setRange([item.selection])}
            />

            <p>Total Nights: {totalDays}</p>
            <p>Total Price: {totalPrice} Tk</p>

            <button className="book-btn">Contact Owner</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
