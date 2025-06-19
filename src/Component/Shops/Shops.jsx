import React from 'react'
import "./Shops.css"
import Card from '../Card/Card'
import huthouse from "../../assets/huthouse.jpg"
import huthouse1 from "../../assets/huthouse1.jpg"
import huthouse2 from "../../assets/huthouse2.jpg"
import room from "../../assets/room.jpg"
import room1 from "../../assets/room1.jpg"
import room2 from "../../assets/room2.jpg"

import village from "../../assets/village1.avif"
import village1 from "../../assets/village2.avif"
import village2 from "../../assets/village3.avif"

import hut1 from "../../assets/hut1.avif"
import hut2 from "../../assets/hut2.avif"
import hut3 from "../../assets/hut3.avif"

function Shops() {
  return (
    <div id='Shops'>
      <Card image1={room} image2={room1} image3={room2} title={"1BHK Farm House in Rajshahi"} price={"60,000"} />
        <Card image1={huthouse} image2={huthouse1} image3={huthouse2} title={"1BHK Farm House in Dhaka"} price={"57,000"} />
            <Card image1={village} image2={village1} image3={village2} title={"3BHK VILLA in Cumilla"} price={"30,000"} />
         <Card image1={hut1} image2={hut2} image3={hut3} title={"3BHK VILLA in FENI"}
        price={"35,000"} />
    </div>
  )
}

export default Shops
