// React ও useContext হুক ইম্পোর্ট করেছি
import React, { useContext } from 'react'
// CSS ফাইল ইম্পোর্ট
import "./Home.css"
// Card কম্পোনেন্ট ইম্পোর্ট
import Card from '../Card/Card'

// প্রয়োজনীয় সব হাউজের ছবি ইম্পোর্ট করেছি
import house from "../../assets/house.jpg"
import house1 from "../../assets/housekichen.jpg"
import house2 from "../../assets/houseliving.jpg"
import farmhouse from "../../assets/farmhouse2.jpg"
import farmhouse1 from "../../assets/farmhouse1.jpg"
import farmhouse2 from "../../assets/farmhouse.jpg"
import flat from "../../assets/roomhouse.avif"
import flat1 from "../../assets/roomhouse1.avif"
import flat2 from "../../assets/roomhouse3.avif"
import villa from "../../assets/villa.jpg"
import villa1 from "../../assets/villa1.jpg"
import villa2 from "../../assets/villa3.jpg"
import mountain from "../../assets/mountain.avif"
import mountain1 from "../../assets/mountain1.avif"
import mountain2 from "../../assets/mountain3.avif"
import huthouse from "../../assets/huthouse.jpg"
import huthouse1 from "../../assets/huthouse1.jpg"
import huthouse2 from "../../assets/huthouse2.jpg"
import village from "../../assets/village1.avif"
import village1 from "../../assets/village2.avif"
import village2 from "../../assets/village3.avif"
import room from "../../assets/room.jpg"
import room1 from "../../assets/room1.jpg"
import room2 from "../../assets/room2.jpg"
import old from "../../assets/old.avif"
import old1 from "../../assets/old2.avif"
import old2 from "../../assets/old3.avif"
import roomnew from "../../assets/roomnew.avif"
import roomnew1 from "../../assets/roomnew1.avif"
import roomnew2 from "../../assets/roomnew2.avif"
import hut1 from "../../assets/hut1.avif"
import hut2 from "../../assets/hut2.avif"
import hut3 from "../../assets/hut3.avif"
import ski from "../../assets/ski.avif"
import ski1 from "../../assets/ski1.avif"
import ski2 from "../../assets/ski2.avif"

// Context থেকে ডেটা নেওয়ার জন্য dataContext ইম্পোর্ট করেছি
import { dataContext } from "../../Context/Usercontext.jsx"; // কনটেক্সট অবজেক্ট ইম্পোর্ট
import { properties } from "../data/data.js";


function Home() {
  const {
    title,
    addListing,
    addImage1,
    addImage2,
    addImage3,
    price
  } = useContext(dataContext);

  // Combine pre-defined properties with user-added listing
  const allProperties = [
    ...properties,
    addListing ? {
      id: "user-added",
      title: title || "New Listing",
      price: price || "N/A",
      image1: addImage1 ? URL.createObjectURL(addImage1) : null,
      image2: addImage2 ? URL.createObjectURL(addImage2) : null,
      image3: addImage3 ? URL.createObjectURL(addImage3) : null,
      location: "",
      description: ""
    } : null
  ].filter(Boolean); // remove null if no user-added listing

  return (
    <div id="home">
      <h2 className="home-title">Discover Your Next Stay</h2>
      <p className="home-subtitle">Find unique places to stay from cozy rooms to luxurious villas.</p>

      <div className="properties-grid">
        {allProperties.map((prop) => (
          <Card
            key={prop.id}
            image1={prop.image1}
            image2={prop.image2}
            image3={prop.image3}
            title={prop.title}
            price={typeof prop.price === "number" ? `৳${prop.price.toLocaleString()}` : prop.price}
            location={prop.location}
            description={prop.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;