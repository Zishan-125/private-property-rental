import React from 'react'
import "./Pool_Houses.css"
import Card from '../Card/Card'
import hut1 from "../../assets/hut1.avif"
import hut2 from "../../assets/hut2.avif"
import hut3 from "../../assets/hut3.avif"
import ski from "../../assets/ski.avif"
import ski1 from "../../assets/ski1.avif"
import ski2 from "../../assets/ski2.avif"

import village from "../../assets/village1.avif"
import village1 from "../../assets/village2.avif"
import village2 from "../../assets/village3.avif"



function Pool_Houses() {
  return (
    <div id='Pool_Houses'>
     
     <Card image1={ski} image2={ski1} image3={ski2} title={"1BHK Farm House in Barishal"} price={"15,000"} />
         <Card image1={village} image2={village1} image3={village2} title={"3BHK VILLA in Cumilla"}
        price={"30,000"} />
         <Card image1={hut1} image2={hut2} image3={hut3} title={"3BHK VILLA in FENI"}
        price={"35,000"} />
    </div>
  )
}

export default Pool_Houses
