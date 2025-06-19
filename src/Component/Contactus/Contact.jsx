import React from 'react'
import "./Contact.css"
import { TbFileLike } from "react-icons/tb";
function Contact() {
  return (
    <div id='contact'>
       <form action="https://formspree.io/f/xblykebo" method='POST'>
               <span id='contacttitle'>Contact Page</span>
              <div className="list">
              <label htmlFor='name1'>UserName</label>
              <input name='username' type='text' id='name1' required></input>
              </div>
               <div className="list">
              <label htmlFor='mail'>Email</label>
              <input name="mail" type='text' id='mail' required></input>
              </div>
               <div className="list">
              <label htmlFor='mess'>Message</label>
              <textarea name ="message" id='messs'></textarea>
              </div>
              <button id='contactbtn'>Submit <TbFileLike /></button>
              
            </form>
    </div>
  )
}

export default Contact

