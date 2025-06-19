// React এবং useContext হুক ইম্পোর্ট করা হয়েছে
import React, { useContext } from 'react'
// CSS ফাইল ইম্পোর্ট
import "./Listing.css"
// আইকন ইম্পোর্ট (বাটনের পাশে আইকন দেখানোর জন্য)
import { IoMdAddCircleOutline } from "react-icons/io";
// কনটেক্সট অবজেক্ট ইম্পোর্ট করা হয়েছে
import { dataContext } from '../../Context/Usercontext'; // Provider না, শুধু context লাগবে এখানে

function Listing() {

    // কনটেক্সট থেকে প্রয়োজনীয় স্টেট এবং সেটার আপডেট ফাংশন গুলো নিচ্ছি
    let {
        title,
        setTitle,
        setaddListing, // শুধু true করে দিতে হবে, তাই setter টা নিচ্ছি
        setaddImage1,
        setaddImage2,
        setaddImage3,
        price,
        setprice
    } = useContext(dataContext); // context থেকে data নিচ্ছি

    // সাবমিট বাটন ক্লিক করলে কি হবে তা এখানে handle করছি
    const handleSubmit = (e) => {
        e.preventDefault(); // পেজ রিফ্রেশ হওয়া বন্ধ করা হয়েছে
        alert("Add Listing Successfully..."); // ইউজারকে success message
        setaddListing(true); // কনটেক্সটে addListing true করে দিলাম

        // নিচে ফর্মের ফিল্ডগুলো ক্লিয়ার করা হচ্ছে
        setTitle("");
        setprice("");
        // image reset করলে একটু বেশি কষ্টকর হয়, চাইলে পরে সেটাও করতে পারো
    };

    return (
        <div id='Listing'>
            {/* পুরো ফর্ম সাবমিট করলে উপরের handleSubmit কাজ করবে */}
            <form onSubmit={handleSubmit}>
                <span id='listingtitle'>Add Your Listing</span>

                {/* Title ইনপুট */}
                <div className="list">
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        id='title'
                        required
                        onChange={(e) => { setTitle(e.target.value) }}
                        value={title} // স্টেট দিয়ে কন্ট্রোল করা ইনপুট
                    />
                </div>

                {/* Description এর জন্য টেক্সট এরিয়া (স্টেট যুক্ত করা হয়নি) */}
                <div className="list">
                    <label htmlFor='des'>Description</label>
                    <textarea id='des'></textarea>
                </div>

                {/* Image 1 আপলোড */}
                <div className="list">
                    <label htmlFor='img1'>Image1</label>
                    <input
                        type='file'
                        id='img1'
                        required
                        onChange={(e) => { setaddImage1(e.target.files[0]) }}
                    />
                </div>

                {/* Image 2 আপলোড */}
                <div className="list">
                    <label htmlFor='img2'>Image2</label>
                    <input
                        type='file'
                        id='img2'
                        required
                        onChange={(e) => { setaddImage2(e.target.files[0]) }}
                    />
                </div>

                {/* Image 3 আপলোড */}
                <div className="list">
                    <label htmlFor='img3'>Image3</label>
                    <input
                        type='file'
                        id='img3'
                        required
                        onChange={(e) => { setaddImage3(e.target.files[0]) }}
                    />
                </div>

                {/* প্রাইস ইনপুট */}
                <div className="list">
                    <label htmlFor='price'>Price</label>
                    <input
                        type='text'
                        id='price'
                        required
                        onChange={(e) => { setprice(e.target.value) }}
                        value={price || ""} // প্রাইস null হলে ফাঁকা থাকবে
                    />
                </div>

                {/* লোকেশন ইনপুট (স্টেট যুক্ত করা হয়নি) */}
                <div className="list">
                    <label htmlFor='loc'>Location</label>
                    <input type='text' id='loc'></input>
                </div>

                {/* সাবমিট বাটন */}
                <button type='submit' id='listbtn'>
                    ADD <IoMdAddCircleOutline />
                </button>
            </form>
        </div>
    )
}

export default Listing
