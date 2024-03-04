import React from 'react'
import personLogo from "./Group 46/Group 46.png"
import moptro from "./moptro logo/moptro logo.png"
import "./logoCommon.css"

const LogoCommon = () => {
     return (
          <div>
               <div id="call-logo">
                    <img src={personLogo} alt="logo" />
               </div>
               <div id="moptro-logo">
                    <img src={moptro} alt="logo" ></img>
                    <span id='number'>4</span>
               </div>
          </div>
     )
}

export default LogoCommon