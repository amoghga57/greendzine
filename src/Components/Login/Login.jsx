import React, {useState } from 'react'
import logo from "./Group 3.png"
import "./login.css"
import { useNavigate } from 'react-router-dom'

const Login = ({onLogin}) => {
const [Email, setEmail] = useState("")
const [Password, setPassword] = useState("")

let navi=useNavigate()


let email="greendzine@gmail.com"
let pass="123"

let confirm=()=>{
  if(Email===email && Password===pass){
    onLogin()
    navi('/home')
  }else{
    window.alert("Invalid Cerdential")
    document.getElementById('label').style.display="flow-root"
    setTimeout(() => {
      document.getElementById('label').style.display="none"
    }, 3000);
  }
}

  return (
    <div id='loginMain'>
          <div id='login-box'>
               <div id="logo">
                    <img src={logo}  alt="logo" />
                    <p>We are Electric</p>
               </div>
               <div id="form">
                    <input type="email" value={Email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='E-mail'  />
                    <input type="password" value={Password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
                    <button onClick={confirm}>Login</button>
                    <p>Forgot Password?</p>
                    <label id='label'>In-Valid  Credentials</label>
               </div>
          </div>
    </div>
  )
}

export default Login