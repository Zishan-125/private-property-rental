import React from 'react'
import "./Tent_Houses.css"
import Card from '../Card/Card'
import hut1 from "../../assets/hut1.avif"
import hut2 from "../../assets/hut2.avif"
import hut3 from "../../assets/hut3.avif"
import villa from "../../assets/villa.jpg"
import villa1 from "../../assets/villa1.jpg"
import villa2 from "../../assets/villa3.jpg"
import mountain from "../../assets/mountain.avif"
import mountain1 from "../../assets/mountain1.avif"
import mountain2 from "../../assets/mountain3.avif"

import village from "../../assets/village1.avif"
import village1 from "../../assets/village2.avif"
import village2 from "../../assets/village3.avif"



function Tent_Houses() {
  return (
    <div id='Tent_Houses'>
     <Card image1={villa} image2={villa1} image3={villa2} title={"2BHK Villa in Dhaka"} price={"65,000"} />
      <Card image1={mountain} image2={mountain1} image3={mountain2} title={"3BHK VILLA in FENI"} price={"33,000"} />
    
         <Card image1={village} image2={village1} image3={village2} title={"3BHK VILLA in Cumilla"}
        price={"30,000"} />
         <Card image1={hut1} image2={hut2} image3={hut3} title={"3BHK VILLA in FENI"}
        price={"35,000"} />
    </div>
  )
}

export default Tent_Houses
