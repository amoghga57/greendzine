import React, { useState } from 'react'
// import Login from './Components/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./Components/Login/Login"
import Home from "./Components/Home/Home"
import User from "./Components/User/User"
import Navigation from './Components/Navigation/Navigation'

const App = () => {
  const [isLogin, setisLogin] = useState(true)
  let valid=()=>{
    setisLogin(true)
  }
  let notValid=()=>{
    setisLogin(true) 
    // makee it has false
  }

  return (
    <div>
      <BrowserRouter basename='/greendzine' >
               <Routes>
                    <Route exact element={<Login onLogin={valid} onReverse={notValid} />} path='/' />
                    <Route element={<Home/>} path='/home' />
                    <Route element={<User/>} path='/user' />
               </Routes>
               {isLogin && <Navigation/>}
          </BrowserRouter>
    </div>
  )
}

export default App