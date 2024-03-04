import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./navigation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faUser } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  let navi=useNavigate()
let goHome=()=>{
  navi("/home")
}
let goUser=()=>{
  navi("/user")
}

  return (
    <div id="outer_body">
      <div id="nav_bar">
        <div onClick={goHome}><button id='b1'><Link to='/home'><FontAwesomeIcon icon={faHouseChimney} id='home' /></Link></button></div>
        <div onClick={goUser}><button id='b2'><Link to='/user'><FontAwesomeIcon icon={faUser} id='home' /></Link></button></div>
      </div>
    </div>
  )
}

export default Navigation