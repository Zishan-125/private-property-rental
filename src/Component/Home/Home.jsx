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

function Home() {

    // useContext দিয়ে কনটেক্সট থেকে সব স্টেট ও সেটার ফাংশন গুলো বের করে নিচ্ছি
    let {
        title,
        setTitle,
        addListing,
        setaddListing,
        addImage1,
        setaddImage1,
        addImage2,
        setaddImage2,
        addImage3,
        setaddImage3,
        price,
        setprice,
        
    } = useContext(dataContext); // context থেকে ডেটা নিচ্ছি

    return (
        <div id='home'>
            {/* নিচে সব রেডি করা হাউজের কার্ড দেখানো হচ্ছে */}
            <Card image1={house} image2={house1} image3={house2} title={"3BHK VILLA in FENI"} price={"40,000"} />
            <Card image1={farmhouse} image2={farmhouse1} image3={farmhouse2} title={"1BHK Farm House in Dhaka"} price={"60,000"} />
            <Card image1={flat} image2={flat1} image3={flat2} title={"1BHK Flat in Chattogram"} price={"40,000"} />
            <Card image1={villa} image2={villa1} image3={villa2} title={"2BHK Villa in Dhaka"} price={"65,000"} />
            <Card image1={mountain} image2={mountain1} image3={mountain2} title={"3BHK VILLA in FENI"} price={"33,000"} />
            <Card image1={huthouse} image2={huthouse1} image3={huthouse2} title={"1BHK Farm House in Dhaka"} price={"57,000"} />
            <Card image1={village} image2={village1} image3={village2} title={"3BHK VILLA in Cumilla"} price={"30,000"} />
            <Card image1={room} image2={room1} image3={room2} title={"1BHK Farm House in Rajshahi"} price={"60,000"} />
            <Card image1={old} image2={old1} image3={old2} title={"3BHK VILLA in Noakhali"} price={"50,000"} />
            <Card image1={roomnew} image2={roomnew1} image3={roomnew2} title={"1BHK Farm House in Khulna"} price={"60,000"} />
            <Card image1={hut1} image2={hut2} image3={hut3} title={"3BHK VILLA in FENI"} price={"35,000"} />
            <Card image1={ski} image2={ski1} image3={ski2} title={"1BHK Farm House in Barishal"} price={"15,000"} />

            {/* যদি ইউজার নতুন লিস্টিং করে, তাহলে সেই নতুন হাউজটা নিচে দেখানো হবে */}
            {
                addListing ? (
                    <Card
                        image1={addImage1 ? URL.createObjectURL(addImage1) : null}
                        image2={addImage2 ? URL.createObjectURL(addImage2) : null}
                        image3={addImage3 ? URL.createObjectURL(addImage3) : null}
                        title={title}
                        price={price || "N/A"} // যদি প্রাইস না দেওয়া থাকে তাহলে "N/A" দেখাবে
                    />
                ) : ""
            }
        </div>
    )
}

// কম্পোনেন্ট এক্সপোর্ট করা হয়েছে
export default Home
