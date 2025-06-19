import React from 'react'
import "./Signup.css"
import { MdPersonAddAlt1 } from "react-icons/md";
function Signup() {
  return (
    <div id='signup'
         onSubmit={(e)=>{
      
        alert("Signup Successfully...")}}
     
           >
      <form action="">
         <span id='signuptitle'>Sign Up Page</span>
         <div className="list">
        <label htmlFor='name'>UserName</label>
        <input type='text' id='name' required></input>
        </div>
        <div className="list">
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' required></input>
        </div>
         <div className="list">
        <label htmlFor='pass1'>Password</label>
        <input type='password' id='pass1' required></input>
        </div>
         <div className="list">
        <label htmlFor='conpass1'>Confirm Password</label>
        <input type='password' id='conpass1' required></input>
        </div>
        <button id='signupbtn'>SignUp <MdPersonAddAlt1 /></button>
        
      </form>
    </div>
  )
}

export default Signup
