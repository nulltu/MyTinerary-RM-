import React from 'react'
import '../styles/message.css'
import { NavLink } from 'react-router-dom'


function Message() {


  return (
    <>
    <p className="text-message">
      Find your perfect trip, <br></br> 
      designed by insiders who know and love their cities.
      </p>
      <div className="arrow-animated">
        <div id="arrowAnim">
          <div className="arrowSliding">
            <div className="arrow"></div>
          </div>
          <div className="arrowSliding delay1">
            <div className="arrow"></div>
          </div>
          <div className="arrowSliding delay2">
            <div className="arrow"></div>
          </div>
          <div className="arrowSliding delay3">
            <div className="arrow"></div>
          </div>
        </div>

      </div>
      <div className="container-fluid center">
        <NavLink className="nav-cities" to="/Cities">Cities</NavLink>
      </div>
    </>
  )
}

export default Message