import React from 'react'
import "./Login.css"
import { MdLogin } from "react-icons/md";
function Login() {
  return (
    <div id='login'
    onSubmit={(e)=>{
        alert("Login Successfully...")
    }}>
       
      <form action="">
         <span id='logintitle'>Login Page</span>
        <div className="list">
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' required></input>
        </div>
         <div className="list">
        <label htmlFor='pass'>Password</label>
        <input type='password' id='pass' required></input>
        </div>
        <button id='loginbtn'>Login<MdLogin /></button>
        
      </form>
    </div>
  )
}

export default Login
