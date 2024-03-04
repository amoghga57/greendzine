import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./Components/Login/Login"
import Home from "./Components/Home/Home"
import User from "./Components/User/User"
// import Navigation from './Components/Navigation/Navigation'

const App = () => {
  // let flag=false

  // const [isLogin, setisLogin] = useState(false)



  return (
    <div>
      <BrowserRouter basename='/greendzine' >
               <Routes>
                    <Route exact element={<Login/>} path='/' />
                    <Route element={<Home/>} path='/home' />
                    <Route element={<User/>} path='/user' />
               </Routes>
               {/* {isLogin && <Navigation/>} */}
          </BrowserRouter>
    </div>
  )
}

export default App