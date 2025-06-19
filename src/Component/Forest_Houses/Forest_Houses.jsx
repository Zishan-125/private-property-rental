import React from 'react'
import "./Forest_Houses.css"
import Card from '../Card/Card'

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


function Forest_Houses() {
  return (
    <div id='Forest_Houses'>
     <Card image1={flat} image2={flat1} image3={flat2} title={"1BHK Flat in Chattogram"} price={"40,000"} />
            <Card image1={villa} image2={villa1} image3={villa2} title={"2BHK Villa in Dhaka"} price={"65,000"} />
            <Card image1={mountain} image2={mountain1} image3={mountain2} title={"3BHK VILLA in FENI"} price={"33,000"} />
            <Card image1={huthouse} image2={huthouse1} image3={huthouse2} title={"1BHK Farm House in Dhaka"} price={"57,000"} />
        
    </div>
  )
}

export default Forest_Houses
