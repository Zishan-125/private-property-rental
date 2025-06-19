import React from 'react'
import "./Card.css"
import house from "../../assets/house.jpg"
import house1 from "../../assets/housekichen.jpg"
import house2 from "../../assets/houseliving.jpg"
function Card({image1,image2,image3,title,price}) {
  return (
    <div className='card'>
      <div className="images">
        <img src={image1}></img>
        <img src={image2}></img>
        <img src={image3}></img>
      </div>
      <span className='cardspan1'>{title}</span>
      <span className='cardspan2'> {price} Tk/ Month</span>
    </div>
  )
}

export default Card
