import React from 'react'
import LogoCommon from '../Common components/LogoCommon'
import "./home.css"
import Navigation from '../Navigation/Navigation'

const Home = () => {
  return (
    <div id="homeMain" >
      <div id="outer-box">
        <LogoCommon />
        <div id="dashboard-info">
          <div id="task">
            <p>Employee Productivity Dashboard</p>
          </div>
          <div id="dashboard-details">
            <div id="details">
              <span id='days'>Productivity on Monday</span>
              <span id='percentage' className='p1' >4%</span>
            </div>
            <div className="bar" id='bar1'></div>
            
            <div id="details">
              <span id='days'>Productivity on Tueday</span>
              <span id='percentage' className='p2' >92%</span>
            </div>
            <div className="bar" id='bar2'></div>
            
            <div id="details">
              <span id='days'>Productivity on Wednesday</span>
              <span id='percentage' className='p3' >122%</span>
            </div>
            <div className="bar" id='bar3'></div>
            
            <div id="details">
              <span id='days'>Productivity on Thursday</span>
              <span id='percentage' className='p4' >93%</span>
            </div>
            <div className="bar" id='bar4'></div>
            
            <div id="details">
              <span id='days'>Productivity on Friday</span>
              <span id='percentage' className='p5' >89%</span>
            </div>
            <div className="bar" id='bar5'></div>
            
            <div id="details">
              <span id='days'>Productivity on Saturday</span>
              <span id='percentage'className='p6' >98%</span>
            </div>
            <div className="bar" id='bar6'></div> 
          </div>
        </div>
      </div>
      <Navigation/>
    </div>
  )
}

export default Home






